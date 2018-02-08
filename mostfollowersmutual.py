import json
import twitter
import pymongo
from pymongo import MongoClient
from bson import json_util

client = MongoClient('mongodb://heroku_xptmg5hr:9sp2bqojd2obgiccnlujse1mo@ds143241.mlab.com:43241/heroku_xptmg5hr')
CONSUMER_KEY = 'd8xfh5N7dCQKG89kZB10OUSin'
CONSUMER_SECRET = 'OHKq4wWgQg3pQjoFyHLDBY7EEbO0UCRupgQ6Re7OEQDpuBxje3'
ACCESS_TOKEN = '1478790870-dW36ujNkJiQpHVJatXsDwFFNDHoKPe941CI1PYK'
ACCESS_TOKEN_SECRET = 'skcLxRmDEbGRbiZ3vpRofLpBg745WaqqOCMZsS1wnOvxn'

# Get the sampleDB database
db = client.heroku_xptmg5hr

# get the api for twitter
api = twitter.Api(consumer_key=CONSUMER_KEY,
                  consumer_secret=CONSUMER_SECRET,
                  access_token_key=ACCESS_TOKEN,
                  access_token_secret=ACCESS_TOKEN_SECRET,
                  sleep_on_rate_limit=True)

# gives the top 10 followers with highest followers of the screenName 
def topFollowers(screenName):
    theFollowers = api.GetFollowers(screen_name=screenName, include_user_entities=True)
    returnList = []
    for each in theFollowers:
        each._json['mutual_connection'] = screenName
        returnList = returnList + [each]
    newlist = sorted(returnList, key=lambda x: x.followers_count, reverse=True)
    newlist = newlist[0:10]
    return newlist

# gives the top connections and mututal friends for a single user
def getFinalMutualConnections(followers):
    finalList = []

    for each in followers:
        finalList = finalList + topFollowers(each['screen_name'])

    finalList = sorted(finalList, key=lambda x: x.followers_count, reverse=True)
    finalList = finalList[0:5]
    return finalList

# saves the top connections to the mongo db database
def saveFinalMutualConnections(finalList, screenName):
    db.User.update({ 'twitter.username': screenName }, {'$set': {'twitter.mutualconnections': [{}]}})
    for item in finalList:
        item._json['record_of'] = screenName
        item = json.dumps(item, default=lambda o: o._json)
        item = json_util.loads(item)
        db.User.update({ 'twitter.username': screenName }, {'$push': {'twitter.mutualconnections': item}})

# function to read followers from mongo db
def read():
    try:
        user = db.User.find()

        for singleUser in user:
            followerConnection = getFinalMutualConnections(singleUser['twitter']['followers'])
            saveFinalMutualConnections(followerConnection,singleUser['twitter']['username'])

    except Exception:
        print("Exception")

read()
