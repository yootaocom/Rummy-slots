(window.webpackJsonp = window.webpackJsonp || []).push([[1, 16, 17], {
    429 : function(e, t, n) {
        var content = n(441);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals); (0, n(36).
            default)("2614876c", content, !0, {
            sourceMap: !1
        })
    },
    439 : function(e, t, n) {
        "use strict";
        n.r(t);
        var o = {
                provide: function() {
                    return {
                        Accordion: this.Accordion
                    }
                },
                props: {},
                data: function() {
                    return {
                        Accordion: {
                            count: 0,
                            active: null
                        }
                    }
                }
            },
            d = (n(440), n(5)),
            component = Object(d.a)(o, (function() {
                return (0, this._self._c)("ul", {
                        staticClass: "accordion m-0 p-0"
                    },
                    [this._t("default")], 2)
            }), [], !1, null, "5fad1068", null);
        t.
            default = component.exports
    },
    440 : function(e, t, n) {
        "use strict";
        n(429)
    },
    441 : function(e, t, n) {
        var o = n(35)(!1);
        o.push([e.i, ".accordion[data-v-5fad1068]{list-style:none}", ""]),
            e.exports = o
    },
    443 : function(e, t, n) {
        "use strict";
        n.r(t);
        var o = {
                props: {
                    itemprop: {
                        type: [String, Boolean],
                        default:
                            !1
                    },
                    itemtype: {
                        type: [String, Boolean],
                        default:
                            !1
                    }
                },
                inject: ["Accordion"],
                data: function() {
                    return {
                        index: null
                    }
                },
                computed: {
                    visible: function() {
                        return this.index === this.Accordion.active
                    }
                },
                created: function() {
                    this.index = this.Accordion.count++
                },
                methods: {
                    open: function() {
                        this.visible ? this.Accordion.active = null: this.Accordion.active = this.index
                    },
                    start: function(e) {
                        e.style.height = e.scrollHeight + "px"
                    },
                    end: function(e) {
                        e.style.height = ""
                    }
                }
            },
            d = n(5),
            component = Object(d.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                return t("li", {
                        staticClass: "accordion__item position-relative border-b-1 border-solid border-primary pb-14 md:pb-24 pt-14 md:pt-16",
                        class: {
                            "accordion__item--active": e.visible
                        },
                        attrs: {
                            itemscope: !0,
                            itemprop: e.itemprop,
                            itemtype: e.itemtype
                        }
                    },
                    [t("div", {
                            staticClass: "accordion__trigger d-flex justify-content-between pt-0 md:pt-8 pr-64",
                            class: {
                                accordion__trigger_active: e.visible
                            },
                            on: {
                                click: e.open
                            }
                        },
                        [e._t("accordion-trigger")], 2), e._v(" "), t("transition", {
                            attrs: {
                                name: "accordion"
                            },
                            on: {
                                enter: e.start,
                                "after-enter": e.end,
                                "before-leave": e.start,
                                "after-leave": e.end
                            }
                        },
                        [t("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.visible,
                                    expression: "visible"
                                }],
                                staticClass: "accordion__content"
                            },
                            [e._t("accordion-content")], 2)]), e._v(" "), t("div", {
                        staticClass: "w-24 pointer-none h-24 accordion__icon position-absolute transition-all duration-300"
                    })], 1)
            }), [], !1, null, null, null);
        t.
            default = component.exports
    },
    526 : function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var o = [{
            categoryName: "How to Play",
            slug: "how-to-play",
            subChild: [{
                categoryName: "Fantasy Cricket",
                slug: "fantasy-cricket",
                items: [{
                    question: "How to get started with your first fantasy match?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Follow these 5 Steps:</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 1 : Select a Match</h4><p class="md:mb-12 mb-8">Choose a match you like from the list of matches shown on the fantasy Homepage.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 2 : Create your team</h4><p class="md:mb-12 mb-8">Choose your best 11 players from all the players playing in the match. Do keep in mind that you have 100 credits to make your team. Do your research well.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 3 : Join a Contest</h4><p class="md:mb-12 mb-8">Choose a contest to play in and win money or play practice contests for free. Generally the more teams you participate with, the more are your winning chances.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 4 : Follow the match</h4><p class="md:mb-12 mb-8">Track your team’s fantasy points across different contests that you joined on the leaderboard. You can track them in the ‘My Games’ section.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Withdraw Your Winnings</h4><p class="mb-0">Gamezy offers the industry\'s best win ratio. Chances are high that you would win. After the match, Your winnings are credited to your Winnings wallet. You can withdraw the winning amount once you have won at least Rs 25.</p></div>'
                },
                    {
                        question: "How to Choose a Match?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">When you open the Gamezy app, select the fantasy sports section. In the fantasy sports section, you need to select the match of your choice.</p><img src="/img/faq/fantasy-cricket-1.png" alt="fantasy cricket" height="377" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">There could be 2 types of matches - Live matches and Upcoming matches. Live matches are the ongoing matches.</p><p class="md:mb-12 mb-8">A Live match card is shown when either you have already participated in that match or there are other variants - second innings and/or live fantasy available for participation. A Live match card looks as shown below:</p><img src="/img/faq/fantasy-cricket-2.png" alt="fantasy cricket 2" height="377" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">There could be 2 types of matches - Live matches and Upcoming matches. Live matches are the ongoing matches.</p><img src="/img/faq/fantasy-cricket-3.png" alt="fantasy cricket 3" height="377" width="240" class="mb-0" /></div>'
                    },
                    {
                        question: "How to create Full Match team",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 1 : Creating your team</h4><p class="md:mb-12 mb-8">Once you have chosen the match you\'d like to play, the contest page will open. Here you can see the "create team" button.</p><img src="/img/faq/create-team-1.png" alt="create team 1" height="272" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Team Creation Page</p><p class="md:mb-12 mb-8">You have 100 credits to make your team. Each player has a credit value. You can spend your credits on the players of your choice and add them to your team. The credit value of all the selected players in your team cannot exceed 100.</p><img src="/img/faq/create-team-2.png" alt="create team 2" height="480" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Also Lookout for ‘In Playing XI’ which means the player is performing in the playing 11 squad.</p><img src="/img/faq/create-team-3.png" alt="create team 3" height="480" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Team Preview</p><p class="md:mb-12 mb-8">Once you\'ve selected all your players you can click on ‘Preview’ button to take a quick look at your entire team.</p><img src="/img/faq/create-team-4.png" alt="create team 4" height="185" width="240" class="md:mb-12 mb-8" /><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 2 : Choosing your Captain and Vice Captain</h4><p class="md:mb-12 mb-8">After you are done creating your entire team, you now need to choose your team\'s Captain and Vice-captain.</p><img src="/img/faq/create-team-5.png" alt="create team 5" height="480" width="240" class="md:mb-12 mb-8" /><div class="border-1 border-solid p-12 md:mb-12 mb-8 border-radius-5" style="background: #007bc21a;border-color: #007bc21a"><p class="text-center" style="color: #007BC2"><strong class="font-600">Captain- Gets 2x Points</strong> scored by him in the game.<br /><strong class="font-600">Vice Captain - Gets 1.5x Points</strong> scored by him in the game.</p></div> <p class="md-0">Then click on “Create Team” to save your team. Now you can join contests using the same team. You can also view the team from My Teams inside the match page.</p></div>'
                    },
                    {
                        question: "How to create Second Inning team?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 1 : Creating your team</h4><p class="md:mb-12 mb-8">You can create your Second Innings team by choosing the Second Innings tab inside the match page. You can create your team by clicking the "create team" button.</p><img src="/img/faq/create-innings.png" alt="create inning 1" height="480" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Team Creation Page</p><p class="md:mb-12 mb-8">You have 100 credits to make your team. Each player has a credit value, you can spend your credits on the players of your choice and add them to your team. There are category limitations similar to full match variant.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 2 : Choosing your Captain and Vice Captain</h4><p class="md:mb-12 mb-8">After you are done creating your entire team, you now need to choose your team\'s Captain and Vice-captain.</p><div class="border-1 border-solid p-12 md:mb-12 mb-8 border-radius-5" style="background: #007bc21a;border-color: #007bc21a"><p class="text-center" style="color: #007BC2"><strong class="font-600">Captain- Gets 2x Points</strong> scored by him in the game.<br /><strong class="font-600">Vice Captain - Gets 1.5x Points</strong> scored by him in the game.</p></div> <p class="md-0">Then click on “Create Team” to save your team. Now you can join contests using the same team. You can also view the team from My Teams inside the match page.</p></div>'
                    },
                    {
                        question: "How to Create Your Live Fantasy team?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 1: Creating your team</h4><p class="md:mb-12 mb-8">You can create your Live Fantasy team by choosing the Live Fantasy tab inside the match page. You can create your team by clicking the "Create Team" button.</p><img src="/img/faq/live-fantasy-1.png" alt="fantasy cricket" height="377" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Team Creation Page</p><p class="md:mb-12 mb-8">You have 45 credits to make your team. Each player has a credit value, you can spend your credits on the players of your choice and add them to your team. There are no category limitations in this variant. You can select 1 or more players from any category.</p><img src="/img/faq/live-fantasy-2.png" alt="fantasy cricket" height="480" width="240" class="md:mb-12 mb-8" /><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">Step 2: Assign Score Multiples</h4><p class="md:mb-12 mb-8">Once you\'ve selected all your players you can click on the “Continue” button to proceed to the “Assign Score Multiples” screen. In this screen you will assign any multiple from 1x - 3x to each of your selected 5 players. Each player can be assigned only one of the multiples.</p><img src="/img/faq/live-fantasy-3.png" alt="fantasy cricket" height="480" width="240" class="mb-0" /><p class="md:mb-12 mb-8">Once done, click on the “Create Team” button to successfully create your Live fantasy team.Now your team will be saved in My team\'s section which you can use to join any contest and play in.</p></div>'
                    },
                    {
                        question: "How to manage your team?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Once you have created your team it gets saved in the "My Teams" section under the match page.</p><img src="/img/faq/manage-team-1.png" alt="manage team 2" height="78" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">You can make as many changes you want to your team on Gamezy, until that match starts, from changing players to changing Captain and Vice captain. You can Duplicate as many teams you want using the Duplicate Option.</p><img src="/img/faq/manage-team-2.png" alt="manage team 2" height="482" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">You can update an existing team by clicking on the “Edit” option.</p><p class="mb-0">You can also share your team by using the share option on the team. Teams can be shared on whatsapp, telegram, facebook etc. Existing users can use the shared link to join the contest with one-click. New users can use the shared link to register on gamezy and join the contest with one-click and both of you can earn rewards.</p></div>'
                    },
                    {
                        question: "How to Join a Contest?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Once you have made a team, you will be back on the contest page.</p><img src="/img/faq/join-contest.png" alt="manage team 2" height="480" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">You can join any Contest by clicking on any price button which looks like this.</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">What Next?</h4><ul style="list-style: disc"><li class="mb-12">If you have already created a team the app will take you to the "My teams" section, here you can select a team to join the contest.</li><li class="mb-12">If you have not created a team the app will guide you to the "Team creation" page where you can pick your players and make a team to be able to join a contest.</li><li class="mb-12">Once you have created or selected your team from the "My teams" section, a contest confirmation pop up will appear.</li></ul><img src="/img/faq/join-contest-2.png" alt="manage team 2" height="480" width="240" class="mb-0" /></div>'
                    },
                    {
                        question: "How to Play Live Fantasy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Playing live fantasy in Gamezy is pretty simple. Please follow these steps:</p><h4 class="font-500 md:mb-12 mb-8 text-secondary-dark">What Next?</h4><p class="md:mb-12 mb-8">Go to the match that you would like to play and click on Live Fantasy</p><p class="md:mb-12 mb-8">Set your team with the available credits</p><p class="md:mb-12 mb-8">Assign score multiples for each player</p><p class="md:mb-12 mb-8">Select the contest that you wish to enter. (Note: Time will be limited for your entry)</p><p class="mb-0">Join contest(s)!</p></div>'
                    }]
            },
                {
                    categoryName: "FanCoach",
                    slug: "fan-coach",
                    items: [{
                        question: "What is the Fantasy FanCoach?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">A new feature built by Gamezy to help users create quality fantasy teams faster using various Player combinations. The teams provided are created by fantasy experts, who have been providing their inputs on youtube, online forums and other social media channels. The feature will include teams with different criterias such as safe teams, grand league teams, small league teams, batsman/bowler heavy teams etc.</p></div>'
                    },
                        {
                            question: "How to use the Fantasy FanCoach?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Step 1: Select the match you want to play.</p><img src="/img/faq/fanCoach-1.png" alt="fancoach step" height="377" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Step 2: Click on the FanCoach tab in the bottom</p><img src="/img/faq/fanCoach-2.png" alt="fancoach cricket 2" height="270" width="240" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Step 3: Get the Match Analysis, Pitch and Weather Report</p><img src="/img/faq/fanCoach-3.png" alt="fanCoach 3" height="259" width="240" class="mb-8" /><p class="md:mb-12 mb-8">Step 4 : Click on “See All Teams” to check out teams provided by Experts</p><img src="/img/faq/fanCoach-4.png" alt="fanCoach 4" height="237" width="240" class="mb-8" /><p class="md:mb-12 mb-8">Step 5 : Click on “Preview” to view the players in a team or Click on “Use this team” to save the team for yourself.</p><img src="/img/faq/fanCoach-5.png" alt="fanCoach 5" height="634" width="240" class="mb-8" /><p class="mb-0">Step 6: Your saved team will appear in the My Teams section for that Match. Select the team to join your preferred contest. You can also edit the team from My Teams section.</p></div>'
                        },
                        {
                            question: "Is Fantasy FanCoach available for free?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Fantasy FanCoach is a free feature available on the full version of the Gamezy app.</p></div>'
                        },
                        {
                            question: "Can I make multiple teams?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Yes you can make multiple teams from one Expert team by duplicating it or you can make multiple teams by picking from those provided by different Experts.</p></div>'
                        },
                        {
                            question: "How to add the same teams as Experts?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">After opening the FanCoach, you can select the Expert team of your preference and use it. If you wish to keep the team the same as that of the Expert’s, then you don’t need to edit it.</p></div>'
                        },
                        {
                            question: "Can I edit the teams after selecting the fantasy expert teams?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Yes you can. After selecting the Expert team of your choice, you will be taken into the team selection with all the players selected by the Expert. If you do not like the choices, then you can edit that team and make it according to your needs.</p></div>'
                        },
                        {
                            question: "When will the teams be ready to use?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Teams for matches will be provided 4 hrs prior to the game which the FanCoach will cover. These teams are subject to change after toss, so you might want to edit after you have selected these teams.</p></div>'
                        },
                        {
                            question: "Will I be able to make 2nd Innings teams as well with Fantasy FanCoach?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Yes, 2nd Innings teams will also be provided by the Fantasy FanCoach.</p></div>'
                        },
                        {
                            question: "What does Safe, Grand League mean?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Teams provided by Experts will be categorized into different types for which they can be used - Safe, Grand League, Small League, Aggressive. This means that certain teams will be optimized for some contests. For example: If you are going head-to-head you might want to play Aggressive, which means your team will have some unique players who can give a lot of points but are risky picks. But, picking this team will give you an edge over your opponent.</p></div>'
                        },
                        {
                            question: "What contests can I join using the expert teams?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You can join any contest of your choice by using teams provided by Experts. But, keep in mind what type of team it is. For example: A Grand League team is better for Mega Contests, while an Aggressive team is better for head-to-heads.</p></div>'
                        },
                        {
                            question: "What is the benefit of the Expert Team?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Expert teams are specifically created teams by Experts who have been providing teams on social media channels. These can help you in several ways:</p><ul style="list-style: disc;padding-left: 16px"><li class="md:mb-12 mb-8">Quick team creation of competitive fantasy teams.</li><li class="md:mb-12 mb-8">Teams which can ensure that you have a higher probability of winning.</li><li class="mb-0">Give you a base team to start with if you are unable to choose and then you can edit</li></ul></div>'
                        },
                        {
                            question: "Will the teams be updated after the lineup is released?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Expert teams are always subject to change after the toss, since the teams are provided 4-5 hrs before the match. If lineups change, then you will be notified to edit your teams.</p></div>'
                        },
                        {
                            question: "Will my teams be auto updated if the Fantasy FanCoach updates the same team?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">No, after toss happens the Fantasy FanCoach will update the teams if there are changes to the lineups. But, this will not automatically change your teams. You will receive a notification to update your teams after toss.</p></div>'
                        },
                        {
                            question: "Why are there no teams under FanCoach?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">This happens when the teams are not yet put in by the Experts for that particular match or sometimes when Experts are not covering that match.</p></div>'
                        },
                        {
                            question: "What happens when I follow an Expert?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">If you follow any Expert by clicking on the ‘Follow’ button, you will always be shown that Expert’s team first.</p></div>'
                        },
                        {
                            question: "Is it mandatory to use an Expert team to create my team?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">No, it is not mandatory to use an Expert provided team. If you are confident of making your own teams, you can always go ahead and create on your own.</p></div>'
                        },
                        {
                            question: "Will the Fantasy FanCoach teams have higher chances of winning ?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">The Fantasy FanCoach teams have been carefully created using the inputs of various fantasy experts on multiple channels such as youtube, online expert forums and social media channels. These teams are based on the past performance of the teams and players involved.</p><p class="mb-0">While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability with respect to the information contained under this segment. Any reliance you place on such information is therefore strictly at your own risk and all users are advised to exercise their independent discretion before creating any teams . In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any monetary loss or damage whatsoever arising out of, or in connection with, the use of this information.</p></div>'
                        },
                        {
                            question: "Is Fantasy FanCoach only limited to cricket?",
                            answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Fantasy FanCoach will initially be rolled out for Cricket and later extended to other games.</p></div>'
                        }]
                }]
        },
            {
                categoryName: "Fantasy Sports",
                slug: "fantasy-sports",
                items: [{
                    question: "What is Fantasy Cricket?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Imagine India and Pakistan playing today at Chinnaswamy stadium. Match is due in a few hours. You can build a team and join a contest by picking the best 11 players from the playing 22. If you are a good reader of the game and understand the game well, you will consider the player\'s match potential, pitch report, weather conditions etc before selecting the team. Based on the on-ground performance of the players, your rank and winnings are calculated by the end of the match.</p></div>'
                },
                    {
                        question: "What happens if there is a tie between 2 or more player ranks?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">In this case, the prize money will be divided equally between the players. If there are 2 winners tied for the 2nd position, then the sum of 2nd and 3rd position prize money will be added and divided by 2 and distributed equally between 2 winners and the next highest scorer will be awarded 4th rank. We round off the prize money and entries in case of percentage-based leagues to make the experience flawless for our users.</p></div>'
                    },
                    {
                        question: "Can I earn points for a match that gets pushed to a super over?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">There are no points allocated for super over in case a T20 or ODI match ends in a tie. In case of a tie, the points & ranking will be allocated only till the last ball bowled of the actual match, not the Super Over. Super Over is not counted as part of the match in terms of fantasy cricket & fantasy cricket points.</p></div>'
                    },
                    {
                        question: "How much bonus can I win from contests?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">For contests that offer bonus prizes; the reward is capped at 9999 per player. For contests that offer both cash and bonus as, if the sum of cash and bonus for a player exceeds 9999, then the bonus part will be adjusted accordingly.</p></div>'
                    },
                    {
                        question: "How are matches affected by rain or DL method judged on Gamezy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Gamezy will follow the direction of the match officials i.e If a result is declared in any form by the match officials, Gamezy will also adhere to it and make the announcement on the app. <br /> For Duck worth Lewis method - if the match has a result according to D/L method (i.e., ends in a win to either team or a tie but not a “no result”) even if not played out fully, we will announce the results of the contests.</p></div>'
                    },
                    {
                        question: "How will Live Fantasy matches be treated in case of abandonment?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">If a contest has completed the minimum threshold of 24 balls bowled in 10 overs (in the format) then the result will be declared regardless of whether the match is abandoned or not.</p></div>'
                    }]
            },
            {
                categoryName: "Referral",
                slug: "referral",
                items: [{
                    question: "What is the referral program?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">On Gamezy, you can refer your friends & family with your personal referral code. Every time your friend plays a cash game, a certain amount of bonus will be earned by which will be credited into both you and your friend\'s bonus account.</p></div>'
                },
                    {
                        question: "Is there a limit to making referrals?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">There is no limit on making referrals. You can make as many referrals as you want & enjoy the benefits.</p></div>'
                    },
                    {
                        question: "Where can I see the bonus referral amount that I earn from my referrals?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You have to visit your account on Gamezy app. Then go to \'My Wallet\', inside that you will see Winnings, Deposit and Bonuses. All your money earned from referrals will reflect under Bonuses. In the recent transactions, you can check the money credited from the bonus to deposit wallet under the name "Hurray! Your friend Played "</p></div>'
                    },
                    {
                        question: "How long will it take to receive the bonus after making a referral?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">The bonus amount for both the referrer and the referee will be credited to them immediately  after the referred person has played their first cash contest. The bonus amount for the referee will reflect in their bonus wallet on Gamezy. The bonus amnount will depend basis the amount of the cash gameplay as per the referral policy.</p></div>'
                    },
                    {
                        question: "When will Referral Bonus expire?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">The bonus received from referrals made will expire in 10 days from the day of receiving the same.</p></div>'
                    },
                    {
                        question: "Until When Will I receive referral benefits?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You will receive and claim referral benefits within a 30-day period. Any action post 30 days will not be valid.</p></div>'
                    },
                    {
                        question: "When does Extra Cash expire?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Extra Cash expires in 3 days from the day of receiving the same.</p></div>'
                    },
                    {
                        question: "What will happen when I use my bonus in a contest and my friend is also playing?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">When you play any contest that allows the usage of bonus, you will see a decrease in your bonus wallet. That is the amount that you are giving to enter a particular contest.</p><p class="md:mb-12 mb-8">When the person you referred is playing a contest at the same time, you will receive 5% of the Buy-in Fee he/she has spent as Extra Cash in your wallet.</p><p class="md:mb-12 mb-8">Example of the referral process:</p><p class="md:mb-12 mb-8">Step 1: User A refers user B to Gamezy. User B receives a signup bonus of Rs.50.</p><p class="md:mb-12 mb-8">Step 2: User B engages in gameplay: Example mega contest, EF Rs 40. User A receives his referral bonus of Rs 100. But as user B did an entry of Rs 40, User A will receive Rs. 2 in the Extra Cash wallet. User A will continue to get Extra Cash in his wallet up to Rs 60 on every paid game User B plays.</p></div>'
                    }]
            },
            {
                categoryName: "Rummy",
                slug: "rummy",
                items: [{
                    question: "How to Play Rummy with Friends?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You can play Rummy with one or more friends. If there are more than 2-3 people playing, then there will be two decks of 52 cards each on the table. While playing online Rummy with friends you can try any of the variants; Points, Dragon & Tiger or Deals Rummy. Points Rummy would be the fastest one to play, where one of you who makes the first valid declaration wins the entire pot.</p></div>'
                },
                    {
                        question: "What is the Rummy Sequence?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">In Rummy, a sequence is a group of three or more consecutive cards of the same suit. There are two types of sequences that are formed; a pure sequence and an impure sequence. To win the game of Rummy you need at least one pure sequence in your Rummy hand.</p></div>'
                    },
                    {
                        question: "Is the Gamezy Fantasy Wallet & Rummy Wallet the same?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">The money shown in the Rummy Wallet is the same amount as your Gamezy Wallet. So you can use your Gamezy earnings in Rummy.</p></div>'
                    },
                    {
                        question: "Can Gamezy Bonus be used in Rummy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Yes, Gamezy Bonus & Wallet Balances are transferable between Rummy & Fantasy Cricket. The money or bonus you earn in Fantasy can be used in Rummy. The percentages of Bonus use might differ from game to game, depending on Buy-in Fee.</p></div>'
                    },
                    {
                        question: "What is TDS & how does it work in online Rummy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">TDS is the "Tax Deducted at Source," which we are legally obliged to deduct on all winnings of more than Rs.10,000/- in a single tournament, or a single Dragon & Tiger Rummy game, Points Rummy game and deals rummy game.</p></div>'
                    },
                    {
                        question: "Are the cards on Gamezy Rummy shuffled randomly?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Yes, the cards on Rummy are randomly generated. We are certified by iTechLabs on our code. The certificate can be found <a href="https://www.yonogames.com/card-games/rummy/rng-certificate/">here</a>.</p></div>'
                    },
                    {
                        question: "When does the Rummy game settle?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><h3 class="md:font-18 font-16 mb-10 font-600">Pool & Points</h3><p class="mb-16">Every deal gets settled either when a player wins the deal or after each player has played 25 moves in the current deal, whichever is earlier.</p><h3 class="md:font-18 font-16 mb-10 font-600">Deal</h3><p class="mb-0">Every deal - except the final deal in the game - gets settled either when a player wins the deal or after each player has played 25 moves in the current deal, whichever is earlier.</p></div>'
                    }]
            },
            {
                categoryName: "Poker",
                slug: "poker",
                items: [{
                    question: "Is Poker Legal in India?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:m-12 mb-8">Yes, Poker (live or online) is legal in India. Well, most of India anyway.</p><p class="md:m-12 mb-8">As per the Supreme Court of India, "Such competitions, where Success depends on quite a substantial degree of Skill, are not necessarily “gambling”. Though there is an element of pure chance, if a particular game is predominantly a game of skill, it would still be a game of “mere skill.” However, even after this clarification, it is still not clear what games are included within the gambit of “mere skill and are not.” So, any Game of Skill is not illegal in India.</p><p class="md:m-12 mb-8">But, the Seventh Schedule Entry 34 List II of the Indian Constitution gives the ability to the State government to choose the laws with respect to betting. Since, gambling is a state subject, different states of India have different views on the idea of betting/gambling. Many states, like Gujrat, Meghalaya, Assam, Odisha, Sikkim and Telangana, consider Poker to be a Game of Chance and have defined it as gambling. Many of these states have also made any form of online betting illegal. Hence it is illegal to play Poker in these states.</p><p class="mb-0">This means that, if you\'re a resident of Gujrat or Assam or Odisha etc., you cannot partake in Online Poker games which involve real money. Further, if you live outside these above-mentioned states but have your Aadhar Card/Driving Licence/Passport registered from these states, you cannot play Online Poker games involving real money.</p></div>'
                },
                    {
                        question: "Do I need to download any specific software or application to play Poker?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You need to download the Gamezy paid android app and register as a user to play poker on Gamezy.</p></div>'
                    },
                    {
                        question: "How should I choose a Poker Table?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Poker tables at Gamezy in the ‘Lobby’ are arranged according to the ‘buy-in’ amount & the ‘blind-structure’, so you can choose accordingly.</p></div>'
                    },
                    {
                        question: "At what age can I play Poker on Gamezy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:m-12 mb-8">Gamezy poker products & services are intended for players who are 18+ years old or above, and of the legal age of majority in their jurisdiction. Doesn’t matter if you are studying in school or college, you must be 18+ years old or above to play poker at Gamezy.</p><p class="md:m-12 mb-8">Indian residents under the age of 18 are not authorised to avail our services and products. Gamezy reserves the right to request proof of age at any stage to verify that minors are not using the service. We may ban/exclude a person from playing if proof of age is not provided or if the company suspects that a person using the service is under-age. Our services and products are also not intended for users connecting to our site from jurisdiction that say it is illegal to do so.</p><p class="mb-0">Any underage player who has provided dishonest or inaccurate information regarding their true age or identity may have all their winnings forfeited and could face criminal prosecution.</p></div>'
                    },
                    {
                        question: "What is Collusion?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Collusion in poker is the act of two or more people sitting at a poker table working together to win more money from other players. It is a negative practice and is strictly prohibited at Gamezy.</p></div>'
                    },
                    {
                        question: "What is Chip Dumping?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">“Chip Dumping" occurs when one player intentionally loses chips to another player at the table. Chip dumping is strictly prohibited at Gamezy.</p></div>'
                    },
                    {
                        question: "How do I buy-in at a cash table?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">It’s very easy playing online poker at Gamezy. This is what you need to do:</p><ul style="list-style: disc"><li class="md:mb-12 mb-8">Select the blinds you want to play, click the lobby with the mentioned big blind.</li><li class="md:mb-12 mb-8">Select the amount you want to sit with.</li><li class="mb-0">Start playing.</li></ul></div>'
                    },
                    {
                        question: "What is the correct way to leave a table?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">We request our players to follow the basic playing etiquettes of poker. When you wish to leave a table, please:</p><ul class="list-style:disc"><li class="md:mb-12 mb-8">Select the blinds you want to play, click the lobby with the mentioned big blind.</li><li class="md:mb-12 mb-8">Once it is acknowledged by our gaming software, you can Sit Out from the table.</li><li class="md:mb-12 mb-8">Click the “leave table” button.</li></ul><p class="mb-0">Note: In case the above steps are not properly followed, sometimes the table may continue and the balance might get deducted as Small Blind and Big Blind.</p></div>'
                    },
                    {
                        question: "What is the difference between ‘no-limit’ & ‘pot-limit’ Poker games?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">In a No Limit poker game, each player can bet or raise any amount up to and including their full stack (the total number of chips they possess at any given time) in any betting round.</p><p class="md:mb-12 mb-8">In a Pot Limit poker game, each player can bet or raise by any amount up to and including the size of the total pot at that time.</p><p class="mb-0">The minimum bet for both No Limit and Pot Limit games is equal to the big blind.</p></div>'
                    },
                    {
                        question: "What happens if I get disconnected in the middle of a hand? Will I lose my chips?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">In case you get disconnected while playing cash (non-tournament) games at Gamezy, the application will automatically try to reconnect you (if your Internet connection is still working). Once the reconnection process is complete, you can resume playing on the tables where you were playing before disconnection.</p><p class="md:mb-12 mb-8">As the application tries to reconnect you to the game, extra time will be allowed for the disconnected player to get back in the game. If you do not reconnect within the extra time, your action is taken as \'check\' if it is allowed. If \'check\' is not allowed, your hand is automatically folded by the system.</p><p class="mb-0">If a player fails to act within the allotted time while being connected, the hand is folded by the system. The amount of extra time may vary depending on the game, but the concept is the same throughout – when faced with a decision in a larger pot, more time is given to return due to a disconnection.</p></div>'
                    },
                    {
                        question: "What happens if the system crashes in between a game?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">All transactions, including pots won and lost, are posted to your Gamezy account at the completion of each hand. In the unlikely event of a server crash which prevents completion of a hand, the hands in progress at every cash game will be restored by rolling back these hands as if they had not happened.</p></div>'
                    },
                    {
                        question: "Does the Poker software allow me to muck the winning hand?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">No. If you play your hand to the showdown and you hold the winning hand, it will always automatically be shown. This feature protects you from accidentally mucking a winner. Why would you ever want to do that?</p></div>'
                    },
                    {
                        question: "What are the consequences of any unfair gameplay?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Players involved in unfair game play activity will have their Gamezy account blocked permanently and their winnings and/or balance will be forfeited.</p></div>'
                    },
                    {
                        question: "I found someone in collusion/chip dumping at the table. What should I do?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">We encourage players to report instances of chip dumping/collusion/soft play by taking a screenshot of some of the hands played, User ID and cash table or tournament details and email us support@gamezy.com. We will make sure that strict action is taken against the offenders if found guilty.</p></div>'
                    },
                    {
                        question: "What is the Poker Wallet and how is TDS calculated on my Poker winnings?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">The money in the poker wallet is used to play poker on Gamezy. When the user does not have enough balance in his poker wallet and wants to join a table.The required amount is automatically deducted from the Gamezy overall Wallet and transferred to the poker wallet and from there to the poker table.</p><p class="mb-0">When leaving a table, the money from the poker table is credited to the poker wallet. This happens after the round in which the player left the table - ends. (Please note- Only by pressing the Red “LEAVE TABLE” button will a user be removed from the table. The exit button will only bring the user back to the lobby and the user will not leave his seat on the table)</p><p class="mb-0">Money from the poker wallet can be withdrawn back to the Gamezy overall wallet by clicking the “TRANSFER” button. The entire poker wallet balance must be withdrawn in one go and a player must not be playing in any table while withdrawing the balance. TDS will be deducted if Net Winnings for the poker cycle is ₹10,000 or more.</p><p class="mb-0">Net Winnings of Poker cycle = Transfer amount - Sum of all money added to Poker Wallet from Gamezy Wallet since the last transfer from poker wallet.</p></div>'
                    },
                    {
                        question: "Can I leave an ongoing tournament?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">In case you leave a tournament you will be sat out on the table and will be Blinded out (ante,small blind,big blind will be paid from your chip stack ) until you resume back or your chipstack becomes 0. Your final standing will be determined on the basis of when your chip stack became 0.</p></div>'
                    },
                    {
                        question: "What is a Satty or Satellite Tournament?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">A satellite tournament in poker is a qualifying event. Winners of these satellites usually win the buy-in fee to a larger and more prestigious tournament in the form of a “Ticket” which can be used to enter the larger tournament.</p></div>'
                    },
                    {
                        question: "Can a ticket won be cashed out?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">A tournament ticket can only be used to enter the specified tournament, It cannot be cashed out.</p></div>'
                    },
                    {
                        question: "What is a ‘rake’? How much is the rake in Poker Games?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">At Gamezy, you always play against another player, never against the house. Gamezy receives compensation by charging a buy-in fee or ‘rake’, a small amount from each cash game pot. For the exact rake information please click the table info button on the poker table.present on the top right corner of the poker table.</p></div>'
                    },
                    {
                        question: "I keep getting disconnected while playing. What should I do?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Gamezy recommends a fast & stable broadband internet connection for the best gaming experience.. A connection of min. 256kbps is suggested.</p><p class="mb-0">For the best experience, the loss percentage should be 0% and latency should be lower than 400ms.</p></div>'
                    },
                    {
                        question: "My Account was banned. How can I restore my account?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">A player’s account is banned only when there is a case of fraud including, but not limited to, chip dumping, collusion, soft play etc. If a player is found to be involved in such malpractices, his/her account will be banned for life and cannot be accessed by the player. If you feel your ban is a mistake please write to us at <a href="mailto:support@gamezy.com" class="d-inline-block text-primary text-secondary-dark:hover">support@gamezy.com</a></p><p class="mb-0">The integrity of our games is paramount to our success, and we are happy to address any concerns you may have.</p></div>'
                    }]
            },
            {
                categoryName: "Rewards & Offers",
                slug: "rewards-and-offer",
                items: [{
                    question: "Where do I check to know more about offers?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You may visit our official website and visit the offers page or open the Gamezy app and click on “All Offers”, inside the hamburger menu, to browse through the various deals we have in place.</p></div>'
                },
                    {
                        question: "What is a Bonus?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">A bonus is an internal currency that is given to Gamezy users as a token of appreciation for joining/playing with us. Sign-up bonuses are awarded only to a new user.</p></div>'
                    },
                    {
                        question: "How to use Bonus?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You can use the bonus when entering a contest. Once you have selected your team, you will be able to use your bonus instead of adding cash into your wallet.</p></div>'
                    },
                    {
                        question: "How to Redeem a 3rd Party Coupon?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">If you have the 3rd party coupon, we would like to inform you that please copy the coupon code and open the Gamezy app >> click on the hamburger menu on the top left corner of the app >> click on Redeem Bonus. There you will get an option to redeem the coupon. Please enter the coupon code and it will be redeemed.</p></div>'
                    },
                    {
                        question: "When does my bonus and extra cash expire?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><ol class="pl-24" style="list-style: revert"><li class="md:mb-12 mb-8">All types of bonus like promotional bonus, signup bonus, winnings bonus, referral bonus etc. have an expiry of 10 days from the date of wallet credit.</li><li class="md:mb-12 mb-8">Extra cash has an expiry of 3 days from the date of wallet credit.</li></ol><p class="mb-0">Note: Expiry of Bonus and Extra Cash can be changed at the discretion of Gamezy as per our T&Cs.</p></div>'
                    },
                    {
                        question: "How to redeem a PhonePe coupon?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">After a successful transaction using PhonePe on Gamezy, you will receive a scratch card. Follow the given steps to redeem your coupon</p><ol class="pl-24" style="list-style: revert"><li class="md:mb-12 mb-8">In the Phone Pe app, click on View My Rewards.</li><li class="md:mb-12 mb-8">Find the unscratched card and swipe the redeem your rewards.</li><li class="mb-0">Once redeemed, your rewards will be credited in your Gamezy account within 24 hours.</li></ol></div>'
                    },
                    {
                        question: "What is bonus percentage use?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">On any contest you join, there is a bonus percentage mentioned on the bottom right corner of the contest card. For example: If it says 20%, then you can use upto 20% bonus on the Buy-in Fee, assuming that you have bonus balance in your Gamezy wallet.</p></div>'
                    }]
            },
            {
                categoryName: "Payment & Withdrawal",
                slug: "payment-and-withdrawal",
                items: [{
                    question: "How to check my wallet balance?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Click on the "My wallet" option inside the hamburger menu, located in the top right corner in the account section, to check your wallet balance.</p><img src="/img/faq/payment-1.png" height="137" width="240" alt="Payment 1" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">If you click on "My wallet", you will land on the My Wallet screen. On this screen, you can see the detailed break-up of the available balance in your wallet.</p><img src="/img/faq/payment-2.png" height="353" width="240" alt="Payment 2" class="mb-0" /></div>'
                },
                    {
                        question: "How to Add Cash?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">You can add cash by Clicking on ‘Add Cash’ button, located on the top right corner of the homepage, which will land you on the Add Cash Page where you can enter your amount, select your pack and check/apply coupons.</p><img src="/img/faq/payment-3.png" height="413" width="240" alt="Payment 3" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Once you have completed the steps in the “Add Cash” page, click “Continue” to go to the “Payment Methods” screen.</p><p class="md:mb-12 mb-8">In this screen, you can select your payment method - UPI, Wallets (PhonePe, Paytm, Amazon Pay, Mobikwik etc), Credit/debit card or netbanking to complete your payment.</p><img src="/img/faq/payment-4.png" height="482" width="240" alt="Payment 4" class="mb-0" /></div>'
                    },
                    {
                        question: "If my deposited balance is not showing in the wallet, what is the issue?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">It may take a short time for your deposit to reach your wallet. If the problem still persists, please contact our support representatives with the screenshot of the deducted amount and the registered phone number .</p></div>'
                    },
                    {
                        question: "What happens if my deposit fails?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">We are sorry to hear this! In case of deposit failure, you will be provided with a refund within (7-10) working days. If this is still not received, please contact your bank directly for updates.</p></div>'
                    },
                    {
                        question: "What are the various payment modes for depositing cash?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">There are different payment methods that you may use for depositing into your Gamezy account:</p><ol style="list-style: number" class="pl-24"><li class="md:mb-12 mb-8">UPI <ol style="list-style: lower-alpha" class="pl-24"><li class="md:mb-12 mb-8">Googlepay UPI</li><li class="md:mb-12 mb-8">Phonepe UPI</li><li class="md:mb-12 mb-8">Paytm UPI</li><li class="md:mb-12 mb-8">Amazon Pay UPI</li></ol></li><li class="md:mb-12 mb-8">Paytm Wallet</li><li class="md:mb-12 mb-8">Credit/Debit and ATM cards</li><li class="md:mb-12 mb-8">Netbanking</li></ol></div>'
                    },
                    {
                        question: "What to do if I haven’t received my OTP?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">You will receive your OTP within 2 minutes after entering your mobile number. If you are still not receiving, kindly check the following:</p><ol style="list-style: lower-alpha" class="pl-24"><li class="md:mb-12 mb-8">Network Connectivity strength</li><li class="md:mb-12 mb-8">Whether you have entered the correct mobile number</li></ol></div>'
                    },
                    {
                        question: "How to Withdraw/Check withdrawal status?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">You will be able to withdraw your winnings by clicking on the Withdraw button that directly takes you to the Withdraw Cash page.</p><p class="md:mb-12 mb-8">Here, you will have to specify your Bank Account No., the IFSC Code, Name and the Specific Amount and then click on the Withdraw Now button. You can also choose to withdraw through UPI using your UPI ID.</p><p class="mb-0">Your winnings will be transferred immediately. Note: You will only be able to withdraw if your minimum wallet balance is Rs.25 and only one withdrawal is allowed per day till 12 midnight.</p></div>'
                    },
                    {
                        question: "What to do in case of a delay in withdrawal?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">We are sorry to hear this! Please get in touch with our support representatives and we shall take a look.</p></div>'
                    },
                    {
                        question: "How will I know my withdrawal status?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">You will be able to check your withdrawal status by the following steps:</p><p class="md:mb-12 mb-8">Step 1: Go to “my Wallet” from the hamburger menu.</p><p class="md:mb-12 mb-8">Step 2: Click on “All Transactions” on the top right corner</p><img src="/img/faq/wallet-1.png" height="105" width="240" alt="wallet 1" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Step 3: In the “Recent transactions” page, select “Withdrawal Transactions” tab</p><img src="/img/faq/wallet-2.png" height="150" width="240" alt="wallet 2" class="md:mb-12 mb-8" /><p class="md:mb-12 mb-8">Step 4: For a given transaction, the status can be found as shown below:</p><p class="mb-0">Note: Withdrawing usually takes 24-48 hours to reflect.</p></div>'
                    },
                    {
                        question: "What is ‘Submitted to bank’ status?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">Change two things here :</p><ol style="list-style: number" class="pl-24"><li class="md:mb-12 mb-8">Change question to "What is ‘Bank Processing’ status?</li><li class="md:mb-12 mb-8">Change the answer to below :</li></ol><p class="mb-0">If the withdrawal status remains ‘Bank Processing’ for more than 24 hours, please do not worry, money is safe with us. Due to some bank server error, the transaction got stuck in between the bank and recipient. It will take 5-7 working days to get the amount back into your Gamezy wallet.</p></div>'
                    },
                    {
                        question: "Can I withdraw my bonus amount?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">You will not be able to withdraw a bonus directly. Once you have used the bonus, the winnings may be withdrawn.</p></div>'
                    },
                    {
                        question: "What are the rules on withdrawal from a restricted state?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">We would like to inform you that residents of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Meghalaya, and Sikkim are not supposed to play real money games as it has been restricted from their respective State Governments. In Gujarat, Poker cash games is not allowed.</p></div>'
                    }]
            },
            {
                categoryName: "Service Charges",
                slug: "service-charges",
                subChild: [{
                    categoryName: "Fantasy",
                    slug: "fantasy",
                    items: [{
                        disableAccordion: !0,
                        answer: "The service charge for Fantasy sports is variable and can range from 0% to 30% based on the category of the contest and how many participants joined."
                    }]
                },
                    {
                        categoryName: "Rummy",
                        slug: "rummy",
                        items: [{
                            disableAccordion: !0,
                            answer: '<div class="service-table md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"> <div style="overflow:auto;"> <table> <tbody><tr> <th>variant</th> <th>Min Buy-in amount</th> <th>Max Buy-in amount</th> <th>Point value</th> <th>Commission %</th> </tr><tr> <td>Tournament</td><td>20</td><td>20</td><td>0</td><td>16.67</td></tr><tr> <td>Tournament</td><td>25</td><td>25</td><td>0</td><td>10</td></tr><tr> <td>Tournament</td><td>50</td><td>50</td><td>0</td><td>10</td></tr><tr> <td>Tournament</td><td>100</td><td>100</td><td>0</td><td>16.67</td></tr><tr> <td>Tournament</td><td>10</td><td>10</td><td>0</td><td>16.67</td></tr><tr> <td>Tournament</td><td>10</td><td>10</td><td>0</td><td>10</td></tr><tr> <td>Tournament</td><td>10</td><td>10</td><td>0</td><td>9.72</td></tr><tr> <td>Pool</td><td>50</td><td>50</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>5</td><td>5</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>25</td><td>25</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>10</td><td>10</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>100</td><td>100</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>250</td><td>250</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>500</td><td>500</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>1000</td><td>1000</td><td>0</td><td>10</td></tr><tr> <td>Pool</td><td>500</td><td>500</td><td>0</td><td>12</td></tr><tr> <td>Pool</td><td>12000</td><td>12000</td><td>0</td><td>10</td></tr><tr> <td>Pool</td><td>1000</td><td>1000</td><td>0</td><td>10</td></tr><tr> <td>Pool</td><td>1</td><td>1</td><td>0</td><td>15</td></tr><tr> <td>Pool</td><td>4000</td><td>4000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>25</td><td>25</td><td>0</td><td>15</td></tr><tr> <td>Deal</td><td>10</td><td>10</td><td>0</td><td>15</td></tr><tr> <td>Deal</td><td>100</td><td>100</td><td>0</td><td>12</td></tr><tr> <td>Deal</td><td>5</td><td>5</td><td>0</td><td>15</td></tr><tr> <td>Deal</td><td>50</td><td>50</td><td>0</td><td>12</td></tr><tr> <td>Deal</td><td>5000</td><td>5000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>10000</td><td>10000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>1000</td><td>1000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>500</td><td>500</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>2000</td><td>2000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>250</td><td>250</td><td>0</td><td>12</td></tr><tr> <td>Deal</td><td>12000</td><td>12000</td><td>0</td><td>10</td></tr><tr> <td>Deal</td><td>1</td><td>1</td><td>0</td><td>15</td></tr><tr> <td>Points</td><td>0.8</td><td>2.4</td><td>0.01</td><td>15</td></tr><tr> <td>Points</td><td>0.06</td><td>3.26</td><td>0.01</td><td>15</td></tr><tr> <td>Points</td><td>0.62</td><td>3.82</td><td>0.01</td><td>15</td></tr><tr> <td>Points</td><td>0.8</td><td>0.8</td><td>0.01</td><td>15</td></tr><tr> <td>Points</td><td>4</td><td>12</td><td>0.05</td><td>15</td></tr><tr> <td>Points</td><td>4</td><td>4</td><td>0.05</td><td>15</td></tr><tr> <td>Points</td><td>8</td><td>8</td><td>0.1</td><td>15</td></tr><tr> <td>Points</td><td>7.5</td><td>87.5</td><td>0.25</td><td>15</td></tr><tr> <td>Points</td><td>20</td><td>20</td><td>0.25</td><td>15</td></tr><tr> <td>Points</td><td>40</td><td>120</td><td>0.5</td><td>15</td></tr><tr> <td>Points</td><td>40</td><td>40</td><td>0.5</td><td>15</td></tr><tr> <td>Points</td><td>40</td><td>40</td><td>0.5</td><td>15</td></tr><tr> <td>Points</td><td>80</td><td>80</td><td>1</td><td>15</td></tr><tr> <td>Points</td><td>160</td><td>480</td><td>2</td><td>15</td></tr><tr> <td>Points</td><td>160</td><td>160</td><td>2</td><td>15</td></tr><tr> <td>Points</td><td>240</td><td>720</td><td>3</td><td>15</td></tr><tr> <td>Points</td><td>400</td><td>1200</td><td>5</td><td>12</td></tr><tr> <td>Points</td><td>400</td><td>400</td><td>5</td><td>12</td></tr><tr> <td>Points</td><td>800</td><td>2400</td><td>10</td><td>12</td></tr><tr> <td>Points</td><td>800</td><td>800</td><td>10</td><td>12</td></tr><tr> <td>Points</td><td>1600</td><td>4800</td><td>20</td><td>12</td></tr><tr> <td>Points</td><td>1600</td><td>1600</td><td>20</td><td>12</td></tr><tr> <td>Points</td><td>3200</td><td>9600</td><td>40</td><td>11</td></tr><tr> <td>Points</td><td>3200</td><td>9600</td><td>40</td><td>12</td></tr><tr> <td>Points</td><td>6400</td><td>19200</td><td>80</td><td>11</td></tr><tr> <td>Points</td><td>6400</td><td>6400</td><td>80</td><td>11</td></tr><tr> <td>Points</td><td>10000</td><td>30000</td><td>125</td><td>11</td></tr><tr> <td>Points</td><td>10000</td><td>30000</td><td>125</td><td>11</td></tr></tbody></table></div></div>'
                        }]
                    },
                    {
                        categoryName: "Poker",
                        slug: "poker",
                        items: [{
                            disableAccordion: !0,
                            answer: '<div class="service-table md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"> <div style="overflow:auto;"> <table> <tbody><tr> <th colspan="5" style="background-color: #111835; color: #fff; font-weight: 500; font-size: 20px;">Cash Table</th> </tr><tr> <th>Blinds</th> <th>Rake(=2)</th> <th>Rake(&gt;=3)</th> <th>Rake Cap(=2)</th> <th>Rake Cap(&gt;=3)</th> </tr><tr> <th colspan="3" style="background-color: white;">Inclusive of GST</th> <th colspan="2" style="background-color: white;">Big Blinds</th> </tr><tr> <td>0.1/0.2</td><td>4.00%</td><td>5.00%</td><td>8</td><td>10</td></tr><tr> <td>0.5/1</td><td>4.00%</td><td>5.00%</td><td>8</td><td>10</td></tr><tr> <td>1/2</td><td>4.00%</td><td>5.00%</td><td>7.5</td><td>10</td></tr><tr> <td>3/6</td><td>4.00%</td><td>5.00%</td><td>6.667</td><td>10</td></tr><tr> <td>5/10</td><td>4.00%</td><td>5.00%</td><td>6</td><td>10</td></tr><tr> <td>10/20</td><td>4.00%</td><td>5.00%</td><td>4</td><td>17</td></tr><tr> <td>25/50</td><td>4.00%</td><td>5.00%</td><td>4</td><td>6</td></tr><tr> <td>50/100</td><td>3.50%</td><td>4.50%</td><td>3</td><td>4</td></tr><tr> <td>100/200</td><td>3%</td><td>4.50%</td><td>2.25</td><td>3</td></tr><tr> <td>200/400</td><td>3%</td><td>3.50%</td><td>1.5</td><td>2</td></tr><tr> <td>200/400</td><td>2.50%</td><td>3.00%</td><td>1.5</td><td>2</td></tr><tr> <td>200/400</td><td>2.50%</td><td>3.00%</td><td>1.5</td><td>2</td></tr></tbody></table></div><p class="md:mb-12 mb-8">* Rake is inclusive of GST</p><h4 class="md:mb-12 mb-8">Tournament Table</h4><p class="mb-0">"Upto 10% (Inclusive of GST) of Buy-In amount for the tournament. Check the details while registering for the tournament."</p></div>'
                        }]
                    },
                    {
                        categoryName: "Casual Games",
                        slug: "casual-games",
                        items: [{
                            disableAccordion: !0,
                            answer: "The service charge for casual games (Ludo, Carrom, Snakes & Ladders and Dragon & Tiger) ranges from 5% to 20% based on the type of game, tables available, and prize given."
                        }]
                    }]
            },
            {
                categoryName: "Other",
                slug: "other",
                items: [{
                    question: "What are the casual games available?",
                    answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Casual games that are available in Gamezy are Ludo,Carrom, Snakes & Ladders and Dragon & Tiger. This list will keep improving as we aim to provide more games to give the best experience to our users.</p></div>'
                },
                    {
                        question: "What is Mission and How it Works & Benefits?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Missions are time-bound challenges on the Gamezy app. Upon completing these, you will be eligible for exciting rewards. The more missions you complete, the bigger your rewards will be.</p></div>'
                    },
                    {
                        question: "What is a Leaderboard and How it Works & Benefits?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">The leaderboard helps you identify what rank you currently hold and where you are likely to finish during a match. The leaderboard also provides you with information on the breakdown of your winnings.</p></div>'
                    },
                    {
                        question: "What is the points system for cricket, kabaddi and football?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Players can refer to the points table for cricket, football and kabaddi by accessing the Gamezy website/application -> More -> Point System. Here, you will be provided with the whole breakdown of the point system that is used for the respective sports.</p></div>'
                    },
                    {
                        question: "How to join the official Gamezy Telegram channel?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">The Gamezy Telegram channel provides you with expert opinions, predictions and news from promotional activity in one place.</p><p class="mb-0">To join the Telegram group, please use this link: <a href="https://t.me/officialgamezy" class="text-primary text-secondary-dark:hover" target="_blank">https://t.me/officialgamezy</a></p></div>'
                    },
                    {
                        question: "What games can I play on Gamezy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">Currently there are 9 available games live on the app which includes the three major games in Fantasy Cricket,Football, Kabbadi, Rummy, Poker and Casual Games. Under Casual Games you will find: Ludo, Carrom, Snakes & Ladders and Dragon & Tiger. All games are available to be tried for free practice and playable with real money against competitive real players.</p></div>'
                    },
                    {
                        question: "Do people really win money on Gamezy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="mb-0">If you have downloaded and installed the Gamezy full app, you can access all the games that are mentioned above and can play them in competitive circumstances with real money winnings available. You will have to play contests against real world opponents and beat them to win.</p></div>'
                    },
                    {
                        question: "Is it legal to play fantasy and rummy games?",
                        answer: "<div class=\"md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400\"><p class=\"mb-0\">A person who is 18 or more years of age is eligible to use our services, however, if a person violates age restrictions, it's his/her sole responsibility to bear the legal actions that might follow. Users are required to understand that our Services are available only in India. We don't offer our services relating to fantasy sports in the states of Andhra Pradesh, Assam, Odisha, Sikkim, Nagaland, Meghalaya and Telangana. We don't offer our services relating to the game of rummy in the states of Assam, Odisha, Telangana, Sikkim, Andhra Pradesh, and Nagaland in India. The users temporarily located in, or visiting, jurisdictions where local laws prohibit them from connecting to the Website/app shall not use the Website/app during the time such restrictions exist. Please refer above to verify the states where the games offered on the Website/app are prohibited. It is the user's responsibility to verify such matters.</p></div>"
                    },
                    {
                        question: "How do I win in Gamezy Fantasy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">There are a few key points you need to keep in mind when building your fantasy cricket XI.</p><ul class="pl-24" style="list-style: disc"><li class="md:mb-12 mb-8">Do careful research and analysis of the players involved.</li><li class="md:mb-12 mb-8">Create your team well in advance. Do not wait till the last moment to build your side.</li><li class="md:mb-12 mb-8">Choose your Captain and Vice-captain wisely because they score 2x and 1.5x points respectively compared to the other players.</li><li class="md:mb-12 mb-8">Always pick as many all-rounders in your team, including wicket-keeping batters.</li><li class="mb-0">Select maximum players from the home team, as they are accustomed to the home conditions and can significantly impact.</li></ul></div>'
                    },
                    {
                        question: "How do I win in Gamezy Rummy?",
                        answer: '<div class="md:font-16 font-14 md:line-height-24 line-height-22 text-secondary font-400"><p class="md:mb-12 mb-8">There are several steps before you can win in a game of Rummy, the simple version is:</p><ul class="pl-24" style="list-style: disc"><li class="md:mb-12 mb-8">All 13 of your cards should be arranged in proper sequences and sets</li><li class="md:mb-12 mb-8">At least one pure sequence is required for a valid declaration</li><li class="mb-0">Select the card you want to remove and click on ‘Declare’ instead of Discard. You can also drag the card you want to declare to the centrally located DECLARE frame on the table in Gamezy Rummy.</li></ul></div>'
                    }]
            }]
    }
}]);