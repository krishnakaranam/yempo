var Twit = require('twit');
var Q = require('q');
 
var config = require('./config/config');

var T = new Twit(config);

var userId = 867980940127068200;

var params = { 
    q: 'krishnakaranam', 
    count: 2
  }
  
  
var followerList = [{
                "translator_type": "none",
                "blocked_by": false,
                "blocking": false,
                "muting": false,
                "notifications": false,
                "follow_request_sent": false,
                "live_following": false,
                "following": false,
                "default_profile_image": false,
                "default_profile": true,
                "has_extended_profile": false,
                "profile_use_background_image": true,
                "profile_text_color": "333333",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_sidebar_border_color": "C0DEED",
                "profile_link_color": "1DA1F2",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/923551763130707969/3ao0sd7s_normal.jpg",
                "profile_image_url": "http://pbs.twimg.com/profile_images/923551763130707969/3ao0sd7s_normal.jpg",
                "profile_background_tile": false,
                "profile_background_image_url_https": null,
                "profile_background_image_url": null,
                "profile_background_color": "F5F8FA",
                "is_translation_enabled": false,
                "is_translator": false,
                "contributors_enabled": false,
                "status": {
                    "lang": "en",
                    "possibly_sensitive": false,
                    "retweeted": false,
                    "favorited": false,
                    "favorite_count": 0,
                    "retweet_count": 405,
                    "is_quote_status": false,
                    "retweeted_status": {
                        "lang": "en",
                        "possibly_sensitive": false,
                        "retweeted": false,
                        "favorited": false,
                        "favorite_count": 225,
                        "retweet_count": 405,
                        "is_quote_status": false,
                        "contributors": null,
                        "place": {
                            "bounding_box": {
                                "coordinates": [
                                    [
                                        [
                                            27.7947598,
                                            -26.3054355
                                        ],
                                        [
                                            27.9557837,
                                            -26.3054355
                                        ],
                                        [
                                            27.9557837,
                                            -26.2074073
                                        ],
                                        [
                                            27.7947598,
                                            -26.2074073
                                        ]
                                    ]
                                ],
                                "type": "Polygon"
                            },
                            "contained_within": [],
                            "country": "South Africa",
                            "country_code": "ZA",
                            "full_name": "Soweto, South Africa",
                            "name": "Soweto",
                            "place_type": "city",
                            "url": "https://api.twitter.com/1.1/geo/id/7efc470da463c9f0.json",
                            "id": "7efc470da463c9f0"
                        },
                        "coordinates": {
                            "coordinates": [
                                27.8509075,
                                -26.2503979
                            ],
                            "type": "Point"
                        },
                        "geo": {
                            "coordinates": [
                                -26.2503979,
                                27.8509075
                            ],
                            "type": "Point"
                        },
                        "in_reply_to_screen_name": null,
                        "in_reply_to_user_id_str": null,
                        "in_reply_to_user_id": null,
                        "in_reply_to_status_id_str": null,
                        "in_reply_to_status_id": null,
                        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                        "extended_entities": {
                            "media": [
                                {
                                    "sizes": {
                                        "large": {
                                            "resize": "fit",
                                            "h": 882,
                                            "w": 600
                                        },
                                        "medium": {
                                            "resize": "fit",
                                            "h": 882,
                                            "w": 600
                                        },
                                        "thumb": {
                                            "resize": "crop",
                                            "h": 150,
                                            "w": 150
                                        },
                                        "small": {
                                            "resize": "fit",
                                            "h": 680,
                                            "w": 463
                                        }
                                    },
                                    "type": "photo",
                                    "expanded_url": "https://twitter.com/AdvBarryRoux/status/938477686477021184/photo/1",
                                    "display_url": "pic.twitter.com/M4h11Zphbq",
                                    "url": "https://t.co/M4h11Zphbq",
                                    "media_url_https": "https://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                    "media_url": "http://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                    "indices": [
                                        22,
                                        45
                                    ],
                                    "id_str": "938477669045428229",
                                    "id": 938477669045428220
                                }
                            ]
                        },
                        "entities": {
                            "media": [
                                {
                                    "sizes": {
                                        "large": {
                                            "resize": "fit",
                                            "h": 882,
                                            "w": 600
                                        },
                                        "medium": {
                                            "resize": "fit",
                                            "h": 882,
                                            "w": 600
                                        },
                                        "thumb": {
                                            "resize": "crop",
                                            "h": 150,
                                            "w": 150
                                        },
                                        "small": {
                                            "resize": "fit",
                                            "h": 680,
                                            "w": 463
                                        }
                                    },
                                    "type": "photo",
                                    "expanded_url": "https://twitter.com/AdvBarryRoux/status/938477686477021184/photo/1",
                                    "display_url": "pic.twitter.com/M4h11Zphbq",
                                    "url": "https://t.co/M4h11Zphbq",
                                    "media_url_https": "https://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                    "media_url": "http://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                    "indices": [
                                        22,
                                        45
                                    ],
                                    "id_str": "938477669045428229",
                                    "id": 938477669045428220
                                }
                            ],
                            "urls": [],
                            "user_mentions": [],
                            "symbols": [],
                            "hashtags": []
                        },
                        "truncated": false,
                        "text": "Retweet For Awareness https://t.co/M4h11Zphbq",
                        "id_str": "938477686477021184",
                        "id": 938477686477021180,
                        "created_at": "Wed Dec 06 18:38:11 +0000 2017"
                    },
                    "contributors": null,
                    "place": null,
                    "coordinates": null,
                    "geo": null,
                    "in_reply_to_screen_name": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_status_id": null,
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                    "extended_entities": {
                        "media": [
                            {
                                "source_user_id_str": "2449502355",
                                "source_user_id": 2449502355,
                                "source_status_id_str": "938477686477021184",
                                "source_status_id": 938477686477021180,
                                "sizes": {
                                    "large": {
                                        "resize": "fit",
                                        "h": 882,
                                        "w": 600
                                    },
                                    "medium": {
                                        "resize": "fit",
                                        "h": 882,
                                        "w": 600
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 680,
                                        "w": 463
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/AdvBarryRoux/status/938477686477021184/photo/1",
                                "display_url": "pic.twitter.com/M4h11Zphbq",
                                "url": "https://t.co/M4h11Zphbq",
                                "media_url_https": "https://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                "media_url": "http://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                "indices": [
                                    40,
                                    63
                                ],
                                "id_str": "938477669045428229",
                                "id": 938477669045428220
                            }
                        ]
                    },
                    "entities": {
                        "media": [
                            {
                                "source_user_id_str": "2449502355",
                                "source_user_id": 2449502355,
                                "source_status_id_str": "938477686477021184",
                                "source_status_id": 938477686477021180,
                                "sizes": {
                                    "large": {
                                        "resize": "fit",
                                        "h": 882,
                                        "w": 600
                                    },
                                    "medium": {
                                        "resize": "fit",
                                        "h": 882,
                                        "w": 600
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 680,
                                        "w": 463
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/AdvBarryRoux/status/938477686477021184/photo/1",
                                "display_url": "pic.twitter.com/M4h11Zphbq",
                                "url": "https://t.co/M4h11Zphbq",
                                "media_url_https": "https://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                "media_url": "http://pbs.twimg.com/media/DQYkd70W4AUktZB.jpg",
                                "indices": [
                                    40,
                                    63
                                ],
                                "id_str": "938477669045428229",
                                "id": 938477669045428220
                            }
                        ],
                        "urls": [],
                        "user_mentions": [
                            {
                                "indices": [
                                    3,
                                    16
                                ],
                                "id_str": "2449502355",
                                "id": 2449502355,
                                "name": "Man's Not Barry Roux",
                                "screen_name": "AdvBarryRoux"
                            }
                        ],
                        "symbols": [],
                        "hashtags": []
                    },
                    "truncated": false,
                    "text": "RT @AdvBarryRoux: Retweet For Awareness https://t.co/M4h11Zphbq",
                    "id_str": "938708553937940480",
                    "id": 938708553937940480,
                    "created_at": "Thu Dec 07 09:55:34 +0000 2017"
                },
                "lang": "en",
                "statuses_count": 809,
                "verified": false,
                "geo_enabled": true,
                "time_zone": null,
                "utc_offset": null,
                "favourites_count": 74,
                "created_at": "Mon Dec 14 14:41:54 +0000 2015",
                "listed_count": 1,
                "friends_count": 4903,
                "followers_count": 1677,
                "protected": false,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "url": null,
                "description": "",
                "location": "Johannesburg, South Africa",
                "screen_name": "NjaYaTeng",
                "name": "Cut-off low",
                "id_str": "4482052595",
                "id": 4482052595
            },
            {
                "translator_type": "none",
                "blocked_by": false,
                "blocking": false,
                "muting": false,
                "notifications": false,
                "follow_request_sent": false,
                "live_following": false,
                "following": false,
                "default_profile_image": false,
                "default_profile": false,
                "has_extended_profile": true,
                "profile_use_background_image": false,
                "profile_text_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_sidebar_border_color": "000000",
                "profile_link_color": "19CF86",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/792249982938124288/1509864853",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/927066191168004096/V7UvVy99_normal.jpg",
                "profile_image_url": "http://pbs.twimg.com/profile_images/927066191168004096/V7UvVy99_normal.jpg",
                "profile_background_tile": false,
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_color": "000000",
                "is_translation_enabled": false,
                "is_translator": false,
                "contributors_enabled": false,
                "status": {
                    "lang": "en",
                    "retweeted": false,
                    "favorited": false,
                    "favorite_count": 0,
                    "retweet_count": 181,
                    "is_quote_status": false,
                    "retweeted_status": {
                        "lang": "en",
                        "retweeted": false,
                        "favorited": false,
                        "favorite_count": 602,
                        "retweet_count": 181,
                        "is_quote_status": false,
                        "contributors": null,
                        "place": null,
                        "coordinates": null,
                        "geo": null,
                        "in_reply_to_screen_name": null,
                        "in_reply_to_user_id_str": null,
                        "in_reply_to_user_id": null,
                        "in_reply_to_status_id_str": null,
                        "in_reply_to_status_id": null,
                        "source": "<a href=\"https://ifttt.com\" rel=\"nofollow\">IFTTT<\/a>",
                        "entities": {
                            "urls": [],
                            "user_mentions": [],
                            "symbols": [],
                            "hashtags": []
                        },
                        "truncated": false,
                        "text": "Follow everyone who retweets and likes this🐡",
                        "id_str": "929631150380810240",
                        "id": 929631150380810240,
                        "created_at": "Sun Nov 12 08:45:12 +0000 2017"
                    },
                    "contributors": null,
                    "place": null,
                    "coordinates": null,
                    "geo": null,
                    "in_reply_to_screen_name": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_status_id": null,
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                    "entities": {
                        "urls": [],
                        "user_mentions": [
                            {
                                "indices": [
                                    3,
                                    15
                                ],
                                "id_str": "745992114798985216",
                                "id": 745992114798985220,
                                "name": "follow help ☁︎",
                                "screen_name": "GainTrickOG"
                            }
                        ],
                        "symbols": [],
                        "hashtags": []
                    },
                    "truncated": false,
                    "text": "RT @GainTrickOG: Follow everyone who retweets and likes this🐡",
                    "id_str": "929632345384202242",
                    "id": 929632345384202240,
                    "created_at": "Sun Nov 12 08:49:57 +0000 2017"
                },
                "lang": "en",
                "statuses_count": 3,
                "verified": false,
                "geo_enabled": false,
                "time_zone": "Mumbai",
                "utc_offset": 19800,
                "favourites_count": 10,
                "created_at": "Sat Oct 29 06:21:30 +0000 2016",
                "listed_count": 0,
                "friends_count": 903,
                "followers_count": 924,
                "protected": false,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "url": null,
                "description": "This FanPage is Dedicated to one who is the only Cricketer to Score Two 200+ Scores in ODI Cricket",
                "location": "India",
                "screen_name": "RO45_club",
                "name": "❤ RO-HITMAN Sharma ❤",
                "id_str": "792249982938124288",
                "id": 792249982938124290
            },
            {
                "translator_type": "none",
                "blocked_by": false,
                "blocking": false,
                "muting": false,
                "notifications": false,
                "follow_request_sent": false,
                "live_following": false,
                "following": false,
                "default_profile_image": false,
                "default_profile": true,
                "has_extended_profile": true,
                "profile_use_background_image": true,
                "profile_text_color": "333333",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_sidebar_border_color": "C0DEED",
                "profile_link_color": "1DA1F2",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/884746398440333312/1499776043",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/930694113858646016/aHUnVSa__normal.jpg",
                "profile_image_url": "http://pbs.twimg.com/profile_images/930694113858646016/aHUnVSa__normal.jpg",
                "profile_background_tile": false,
                "profile_background_image_url_https": null,
                "profile_background_image_url": null,
                "profile_background_color": "F5F8FA",
                "is_translation_enabled": false,
                "is_translator": false,
                "contributors_enabled": false,
                "status": {
                    "lang": "hi",
                    "possibly_sensitive": false,
                    "retweeted": false,
                    "favorited": false,
                    "favorite_count": 2,
                    "retweet_count": 1,
                    "is_quote_status": false,
                    "contributors": null,
                    "place": null,
                    "coordinates": null,
                    "geo": null,
                    "in_reply_to_screen_name": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_status_id": null,
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                    "extended_entities": {
                        "media": [
                            {
                                "sizes": {
                                    "large": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "medium": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/NishantThakre2/status/929676736614187008/photo/1",
                                "display_url": "pic.twitter.com/XlweRICoVT",
                                "url": "https://t.co/XlweRICoVT",
                                "media_url_https": "https://pbs.twimg.com/media/DObgDMpV4AAmipa.jpg",
                                "media_url": "http://pbs.twimg.com/media/DObgDMpV4AAmipa.jpg",
                                "indices": [
                                    12,
                                    35
                                ],
                                "id_str": "929676718637441024",
                                "id": 929676718637441020
                            }
                        ]
                    },
                    "entities": {
                        "media": [
                            {
                                "sizes": {
                                    "large": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "medium": {
                                        "resize": "fit",
                                        "h": 640,
                                        "w": 640
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/NishantThakre2/status/929676736614187008/photo/1",
                                "display_url": "pic.twitter.com/XlweRICoVT",
                                "url": "https://t.co/XlweRICoVT",
                                "media_url_https": "https://pbs.twimg.com/media/DObgDMpV4AAmipa.jpg",
                                "media_url": "http://pbs.twimg.com/media/DObgDMpV4AAmipa.jpg",
                                "indices": [
                                    12,
                                    35
                                ],
                                "id_str": "929676718637441024",
                                "id": 929676718637441020
                            }
                        ],
                        "urls": [],
                        "user_mentions": [],
                        "symbols": [],
                        "hashtags": []
                    },
                    "truncated": false,
                    "text": "JAY MARATHA https://t.co/XlweRICoVT",
                    "id_str": "929676736614187008",
                    "id": 929676736614187010,
                    "created_at": "Sun Nov 12 11:46:21 +0000 2017"
                },
                "lang": "en",
                "statuses_count": 3,
                "verified": false,
                "geo_enabled": false,
                "time_zone": null,
                "utc_offset": null,
                "favourites_count": 56,
                "created_at": "Tue Jul 11 12:09:13 +0000 2017",
                "listed_count": 0,
                "friends_count": 2027,
                "followers_count": 307,
                "protected": false,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "url": null,
                "description": "Wwe",
                "location": "Nagpur",
                "screen_name": "NishantThakre2",
                "name": "Nishant Thakre",
                "id_str": "884746398440333312",
                "id": 884746398440333310
            },
            {
                "translator_type": "none",
                "blocked_by": false,
                "blocking": false,
                "muting": false,
                "notifications": false,
                "follow_request_sent": false,
                "live_following": false,
                "following": false,
                "default_profile_image": false,
                "default_profile": true,
                "has_extended_profile": true,
                "profile_use_background_image": true,
                "profile_text_color": "333333",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_sidebar_border_color": "C0DEED",
                "profile_link_color": "1DA1F2",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/869184084949557254/HFOkgX5O_normal.jpg",
                "profile_image_url": "http://pbs.twimg.com/profile_images/869184084949557254/HFOkgX5O_normal.jpg",
                "profile_background_tile": false,
                "profile_background_image_url_https": null,
                "profile_background_image_url": null,
                "profile_background_color": "F5F8FA",
                "is_translation_enabled": false,
                "is_translator": false,
                "contributors_enabled": false,
                "status": {
                    "lang": "und",
                    "retweeted": false,
                    "favorited": false,
                    "favorite_count": 1,
                    "retweet_count": 0,
                    "is_quote_status": false,
                    "contributors": null,
                    "place": null,
                    "coordinates": null,
                    "geo": null,
                    "in_reply_to_screen_name": "gizem_ciloglu",
                    "in_reply_to_user_id_str": "715826461224144897",
                    "in_reply_to_user_id": 715826461224144900,
                    "in_reply_to_status_id_str": "873495790056067074",
                    "in_reply_to_status_id": 873495790056067070,
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                    "entities": {
                        "urls": [],
                        "user_mentions": [
                            {
                                "indices": [
                                    0,
                                    14
                                ],
                                "id_str": "715826461224144897",
                                "id": 715826461224144900,
                                "name": "Gizem Çiloğlu",
                                "screen_name": "gizem_ciloglu"
                            },
                            {
                                "indices": [
                                    15,
                                    31
                                ],
                                "id_str": "738756863831986177",
                                "id": 738756863831986180,
                                "name": "216",
                                "screen_name": "benikiyuzonalti"
                            },
                            {
                                "indices": [
                                    32,
                                    45
                                ],
                                "id_str": "3416587553",
                                "id": 3416587553,
                                "name": "gökhan karaş",
                                "screen_name": "gokhankaras_"
                            }
                        ],
                        "symbols": [],
                        "hashtags": []
                    },
                    "truncated": false,
                    "text": "@gizem_ciloglu @benikiyuzonalti @gokhankaras_ Hi",
                    "id_str": "873759288845586432",
                    "id": 873759288845586430,
                    "created_at": "Sun Jun 11 04:30:22 +0000 2017"
                },
                "lang": "en",
                "statuses_count": 9,
                "verified": false,
                "geo_enabled": false,
                "time_zone": null,
                "utc_offset": null,
                "favourites_count": 53,
                "created_at": "Mon May 29 13:18:20 +0000 2017",
                "listed_count": 1,
                "friends_count": 19,
                "followers_count": 106,
                "protected": false,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "url": null,
                "description": "frds",
                "location": "India",
                "screen_name": "VaddeVeersh",
                "name": "Veersh vadee",
                "id_str": "869181111943000064",
                "id": 869181111943000060
            },
            {
                "translator_type": "none",
                "blocked_by": false,
                "blocking": false,
                "muting": false,
                "notifications": false,
                "follow_request_sent": false,
                "live_following": false,
                "following": false,
                "default_profile_image": false,
                "default_profile": true,
                "has_extended_profile": true,
                "profile_use_background_image": true,
                "profile_text_color": "333333",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_sidebar_border_color": "C0DEED",
                "profile_link_color": "1DA1F2",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/881804571152183297/1499100624",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/881918063192485890/8YjsQhGK_normal.jpg",
                "profile_image_url": "http://pbs.twimg.com/profile_images/881918063192485890/8YjsQhGK_normal.jpg",
                "profile_background_tile": false,
                "profile_background_image_url_https": null,
                "profile_background_image_url": null,
                "profile_background_color": "F5F8FA",
                "is_translation_enabled": false,
                "is_translator": false,
                "contributors_enabled": false,
                "status": {
                    "lang": "hi",
                    "possibly_sensitive": false,
                    "retweeted": false,
                    "favorited": false,
                    "favorite_count": 0,
                    "retweet_count": 0,
                    "is_quote_status": false,
                    "contributors": null,
                    "place": null,
                    "coordinates": null,
                    "geo": null,
                    "in_reply_to_screen_name": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_status_id": null,
                    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android<\/a>",
                    "extended_entities": {
                        "media": [
                            {
                                "sizes": {
                                    "medium": {
                                        "resize": "fit",
                                        "h": 1024,
                                        "w": 768
                                    },
                                    "large": {
                                        "resize": "fit",
                                        "h": 1024,
                                        "w": 768
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 680,
                                        "w": 510
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/HajiKhanJat1/status/881921163143913473/photo/1",
                                "display_url": "pic.twitter.com/EaMLLGMF07",
                                "url": "https://t.co/EaMLLGMF07",
                                "media_url_https": "https://pbs.twimg.com/media/DD02mY1WAAEcYpy.jpg",
                                "media_url": "http://pbs.twimg.com/media/DD02mY1WAAEcYpy.jpg",
                                "indices": [
                                    102,
                                    125
                                ],
                                "id_str": "881921135163604993",
                                "id": 881921135163604990
                            }
                        ]
                    },
                    "entities": {
                        "media": [
                            {
                                "sizes": {
                                    "medium": {
                                        "resize": "fit",
                                        "h": 1024,
                                        "w": 768
                                    },
                                    "large": {
                                        "resize": "fit",
                                        "h": 1024,
                                        "w": 768
                                    },
                                    "small": {
                                        "resize": "fit",
                                        "h": 680,
                                        "w": 510
                                    },
                                    "thumb": {
                                        "resize": "crop",
                                        "h": 150,
                                        "w": 150
                                    }
                                },
                                "type": "photo",
                                "expanded_url": "https://twitter.com/HajiKhanJat1/status/881921163143913473/photo/1",
                                "display_url": "pic.twitter.com/EaMLLGMF07",
                                "url": "https://t.co/EaMLLGMF07",
                                "media_url_https": "https://pbs.twimg.com/media/DD02mY1WAAEcYpy.jpg",
                                "media_url": "http://pbs.twimg.com/media/DD02mY1WAAEcYpy.jpg",
                                "indices": [
                                    102,
                                    125
                                ],
                                "id_str": "881921135163604993",
                                "id": 881921135163604990
                            }
                        ],
                        "urls": [],
                        "user_mentions": [],
                        "symbols": [],
                        "hashtags": []
                    },
                    "truncated": false,
                    "text": "ये आइने जो तुम्हें कम पसंद करते हैं क्योंकि वो जानते हैं की तुम्हें हम पसंद करते हैं  haji Khan. R .. https://t.co/EaMLLGMF07",
                    "id_str": "881921163143913473",
                    "id": 881921163143913470,
                    "created_at": "Mon Jul 03 17:02:45 +0000 2017"
                },
                "lang": "en",
                "statuses_count": 5,
                "verified": false,
                "geo_enabled": false,
                "time_zone": null,
                "utc_offset": null,
                "favourites_count": 2,
                "created_at": "Mon Jul 03 09:19:27 +0000 2017",
                "listed_count": 0,
                "friends_count": 96,
                "followers_count": 3,
                "protected": false,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "url": null,
                "description": "ये आइने जो तुम्हें कम पसंद करते हैं क्योंकि वो जानते हैं की तुम्हें हम पसंद करते हैं  MALEK HAJI KHAN.R",
                "location": "गुजरात, भारत",
                "screen_name": "HajiKhanJat1",
                "name": "Haji Khan Jat",
                "id_str": "881804571152183297",
                "id": 881804571152183300
            }];
  

// searching for a user based on name or user id

//T.get('users/search', params, gotUser); 

function gotUser(err, data, response) {
  var user = data;
  //console.log('user id is '); 
  //console.log(user);
  //console.log(data[0].id);
  for (var i = 0; i < user.length; i++) {
    //console.log(user[i].id);  	
  }
}


// searching for friends/followers of the user based on name or user id

var screenName = 'krishnakaranam3';

var parameters = { 
  screen_name: 'NjaYaTeng', 
  count: 200,
  cursor: -1
}


var number = 0;
var followers = [];

	function getAllFollowers(screenName, followers){
	
		T.get('followers/list', 
				{ screen_name: screenName, count: 200 },  
				function getData(err, data, response) {
				if (err) {
					console.log(err);
					} else {
						followers = followers.concat(data.users);
						
						if(data.next_cursor > 0){
						  T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
						} else {
							followers.sort(sortit);
							return followers
						}
					}
				});
	}
	
	function sortit(a,b){
		return(b.followers_count - a.followers_count)
	}
	

// create and post a tweet from the user who authenticated the application

var tweet = {
    status: '#youthEmpowerment from yempo 19'
  }
  //T.post('statuses/update', tweet, tweeted);
  
  function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
      console.log('tweet data is ');
      console.log(data);
    }
  }


// getting each of the users friends and displaying the number of friends of each of user's friends  
// rate limiting of twitter is limiting us to get only 15 friends per user

// will be working on optimizations to increase this limit.

//loopFollowers(userId);

function loopFollowers(userId) {
    T.get('followers/ids', { user_id: userId },  function (err, data, response) {
        if (err) {
            console.log(err);
        } else {
        var list = data.ids;
        console.log(userId);
        console.log(list.length);
        for (var i = 0; i < list.length; i++) {
            T.get('followers/ids', { user_id: list[i] },  function (err, dataFollowers, response) {
                if (err) {
                    console.log(err);
                } else {
                var followersList = dataFollowers.ids;
                console.log(list[i]);
                console.log(followersList.length);
            }
            });  	
        }
      }
    });
  }


//Gateway to the outside network:
var mutual = 0;
var screenName1 = 'NjaYaTeng';
var screenName2 = 'niteshtiwari22';
var followersOfUser1 = [];
var followersOfUser2 = [];


// function to get all the follower Id's of a user with screenname
	function getFollowerIds(screenName ,followersOfUser){
		var deferred  = Q.defer();
		
		T.get('followers/ids', 
			{ screen_name: screenName, count: 5000 },  
			function getData(err, data, response) {
				if (err) {
					console.log("error is " +err+ " for screenname "+screenName);
				}
				
				var followersUser = data;
				followersOfUser = followersOfUser.concat(followersUser.ids);
				//console.log("getFollowerIds length is "+followersOfUser.length);
	
				if(followersUser.next_cursor > 0){
				T.get('followers/ids', { screen_name: screenName, count: 5000, cursor: followersUser.next_cursor_str }, getData);
				} else {
					//console.log("after followersOfUser "+followersOfUser.length);
					followersOfUser.push(screenName);
					deferred.resolve(followersOfUser);
					
				}
			});
			
		return deferred.promise;
	}

// Function to splice the array
	function remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	
// Function to print the contents of the array passed
	function printer(followersOfUser){
		for (var i = 0; i < followersOfUser.length; i++) {
				console.log("printing "+followersOfUser[i]);
			}
	}
	
// Function to remove the mutual friends of the array 2
	function removeMutual(followersOfUser1,followersOfUser2){
		var deferred  = Q.defer();
		for (var i = 0; i < followersOfUser1.length; i++) {
			remove(followersOfUser2, followersOfUser1[i].id);
			//console.log("removing");
		}
		deferred.resolve(followersOfUser2);
		return deferred.promise;
	}
	
// Function to sort the 2d array of screen_name and removeMutual lengths
// Example usage : array.sort(sortForGateway);
	function sortForGateway(a, b) {
		if (a.length === b.length) {
			return 0;
		}
		else {
			return (a.length > b.length) ? -1 : 1;
		}
	}
	
// calling gateway to the outside function and sorting the array
	gatewayToOutside(followerList)
	.then(function(data){
		
		var gatewayArray = [];
		
		for (var [key, value] of data) {
			var pair = {
				screen_name: key,
				length: value
			};
			gatewayArray.push(pair);
		}
		
		gatewayArray.sort(sortForGateway);
		console.log('array is ' + JSON.stringify(gatewayArray));
		
	});
	
	// function to get outside network
	function gatewayToOutside(followerList){
		var deferred  = Q.defer();
		var myMap = new Map();
		var sc_name;
		
		for (var i = 0; i < followerList.length; i++) {
			var length;
			var followerFollowers = [];
			
			getFollowerIds(followerList[i].screen_name,followerFollowers)
				.then(function(data){
					sc_name = data.pop();
					followerFollowers = data;
					
					removeMutual(followerList, followerFollowers)
						.then(function(data){
							myMap.set(sc_name,data.length);
							
							if(myMap.size == followerList.length){
								deferred.resolve(myMap);
							}
				})
				});
		}
	return deferred.promise;
	}
