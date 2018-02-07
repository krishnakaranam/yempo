var config = require('./config/config');
var Twit = require('twit');
var T = new Twit(config);
var Q = require('q');

var asyncLoop = require('async');

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
                "text": "Follow everyone who retweets and likes thisðŸ¡",
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
                        "name": "follow help â˜ï¸Ž",
                        "screen_name": "GainTrickOG"
                    }
                ],
                "symbols": [],
                "hashtags": []
            },
            "truncated": false,
            "text": "RT @GainTrickOG: Follow everyone who retweets and likes thisðŸ¡",
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
        "name": "â¤ RO-HITMAN Sharma â¤",
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
                        "name": "Gizem Ã‡iloÄŸlu",
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
                        "name": "gÃ¶khan karaÅŸ",
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
            "text": "à¤¯à¥‡ à¤†à¤‡à¤¨à¥‡ à¤œà¥‹ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤•à¤® à¤ªà¤¸à¤‚à¤¦ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤µà¥‹ à¤œà¤¾à¤¨à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤•à¥€ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤¹à¤® à¤ªà¤¸à¤‚à¤¦ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚  haji Khan. R .. https://t.co/EaMLLGMF07",
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
        "description": "à¤¯à¥‡ à¤†à¤‡à¤¨à¥‡ à¤œà¥‹ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤•à¤® à¤ªà¤¸à¤‚à¤¦ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤µà¥‹ à¤œà¤¾à¤¨à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤•à¥€ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤¹à¤® à¤ªà¤¸à¤‚à¤¦ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚  MALEK HAJI KHAN.R",
        "location": "à¤—à¥à¤œà¤°à¤¾à¤¤, à¤­à¤¾à¤°à¤¤",
        "screen_name": "HajiKhanJat1",
        "name": "Haji Khan Jat",
        "id_str": "881804571152183297",
        "id": 881804571152183300
    }];



// execute mostFollowersMutual
mostFollowersMutual(followerList)
    .then(function(data){
        console.log(data);
    });

// Get Most Followers of all mutual friends
function mostFollowersMutual (followerList){
    var deferred  = Q.defer();
    followersMutual(followerList)
        .then(function(data){
            console.log("ret data is "+data);
            var followersMutualArray = [];
            for (var [key, value] of data) {
                for (var i = 0; i < value.length; i++) {
                    var pair = {
                        screen_name: key,
                        follower: value[i]
                    };
                    followersMutualArray.push(pair);
                }
            }
            followersMutualArray.sort(sortForFollowers);
            console.log("followersMutualArray length is "+followersMutualArray.length);
            followersMutualArray.slice(0, 9);
            deferred.resolve(followersMutualArray);
        });
    return deferred.promise;
}


// sorting function
function sortForFollowers(a, b) {
    if (a.follower.followers_count === b.follower.followers_count) {
        return 0;
    } else {
        return (a.follower.followers_count > b.follower.followers_count) ? -1 : 1;
    }
}

// sorting function
function sortFollowers(a, b) {
    if (a.followers_count === b.followers_count) {
        return 0;
    } else {
        return (a.followers_count > b.followers_count) ? -1 : 1;
    }
}

// function to get outside network
function followersMutual (followerList){
    var deferred  = Q.defer();
    var myMap = new Map();
    var followers = [];

    (function next(index) {
        if (index === followerList.length) {
            deferred.resolve(myMap);
            console.log("Map is ",myMap);
            return;
        }
        var follower = followerList[index];
        console.log("index is ",index);
        getAllFollowersMutual(follower.screen_name,followers,-1,0)
            .then(function(data){
                console.log("got the return call ");
                myMap.set(follower.screen_name,data);
                next(index + 1);
            });
    })(0);

    //wait(60000);
    return deferred.promise;
}

// follower list with screen name
//function getAllFollowersMutual(screenName, followers){
//		var deferred  = Q.defer();
//		var count = 0;
//		T.get('followers/list',
//				{ screen_name: screenName, count: 200 },
//				function getData(err, data, response) {
//				if (err) {
//					console.log(err);
//					} else {
//						followers = followers.concat(data.users);
//
//						if(data.next_cursor > 0){
//						  console.log("waiting");
//						  wait(70000);
//						  console.log("wait done");
//						  T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
//						} else {
//							followers.sort(sortit);
//							console.log(followers.length);
//							//limiting the array to 10 places
//							followers.slice(0, 9);
//							deferred.resolve(followers);
//						}
//					}
//				});
//		return deferred.promise;
//	}


// updated follower list with screen names and cursor
// follower list with screen name
function getAllFollowersMutual(screenName, followers, next_cursor, count){
    var deferred  = Q.defer();
    if(count > 14){
        console.log("cursor > 14 "+next_cursor);
        console.log("waiting");
        wait(70000);
        count = count - 1;
        console.log("wait done");
        getAllFollowersMutual(screenName, followers, next_cursor, count);
    } else {
        if(next_cursor == -1){
            getFollowerData(screenName, followers, next_cursor)
                .then(function(data){
                    console.log("cursor == -1 "+next_cursor);
                    count = count + 1;
                    getAllFollowersMutual(screenName, data.arrayFollowers, data.nextCursor, count);
                });
        } else if(next_cursor > 0){
            getFollowerData(screenName, followers, next_cursor)
                .then(function(data){
                count = count + 1;
                console.log("cursor > 0 "+next_cursor);
                console.log("cursor > 0 count ",count);
                console.log("cursor > 0 screen name "+screenName);
                console.log("cursor > 0 data.arrayFollowers "+data.arrayFollowers);
                getAllFollowersMutual(screenName, data.arrayFollowers, data.nextCursor, count);
            });
        } else {
            processFollowers(followers)
                .then(function(data){
                    deferred.resolve(data);
                });
        }
    }
    console.log("returning the call");
    return deferred.promise;
}

function  processFollowers(followers) {
    var deferred  = Q.defer();
    //followers = followers.slice(0, 2);
    console.log("The followers length is ",followers);
    followers.sort(sortFollowers);
    console.log("The sorted followers length is  ",followers);
    followers = followers.slice(0, 10);
    console.log("The sliced followers length is  ",followers.length);
    //if(followers.length === 10) {
        deferred.resolve(followers);
    //}

    return deferred.promise;
}



function getFollowerData(screenName, followers, cursor_nxt){
    var deferred  = Q.defer();

    //console.log("screenName is " + screenName);

    //console.log("cursor_nxt is " + cursor_nxt);

    if(cursor_nxt === -1) {
        T.get('followers/list',
            {screen_name: screenName, count: 200},
            function getData(err, data, response) {
                if (err) {
                    console.log("error is" + err);
                } else {

                    followers = followers.concat(data.users);
                    console.log("followers is " , followers.length);
                    var result = {
                        arrayFollowers: followers,
                        nextCursor: data.next_cursor_str
                    };

                    //return result;
                    deferred.resolve(result);
                }
            }
        );
    } else {
        T.get('followers/list',
            {screen_name: screenName, count: 200, cursor: cursor_nxt},
            function getData(err, data, response) {
                if (err) {
                    console.log("error is" + err);
                } else {

                    followers = followers.concat(data.users);

                    var result = {
                        arrayFollowers: followers,
                        nextCursor: data.next_cursor_str
                    };

                    deferred.resolve(result);
                    // return result;
                }
            }
        );
    }

    return deferred.promise;
}



function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
