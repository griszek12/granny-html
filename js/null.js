// YaGames SDK Mock - Enables game to run without actual SDK
window.YaGames = {
    init: async function() {
        return {
            features: {
                LoadingAPI: {
                    ready: function() {}
                }
            },
            billPayments: {
                purchase: async function() { return { purchaseToken: '' }; },
                getPurchases: async function() { return []; },
                consumePurchase: async function() { return true; }
            },
            ads: {
                showBanner: function() {},
                showInterstitial: async function() { return {}; },
                showRewarded: async function() { return {}; }
            },
            player: {
                getUniqueID: function() { return 'player_' + Math.random(); },
                getName: function() { return 'Player'; },
                getPhoto: function() { return null; },
                getIDsPerGame: async function() { return {}; },
                getStats: async function() { return {}; },
                setStats: async function() { return true; }
            },
            leaderboards: {
                getLeaderboardDescription: async function() { return {}; },
                getLeaderboardScores: async function() { return { ranges: [], userRank: 0, scores: [] }; },
                getLeaderboardPlayerEntry: async function() { return null; },
                setLeaderboardScore: async function() { return true; }
            },
            environment: {
                i18n: {
                    lang: 'en'
                },
                payload: ''
            },
            deviceInfo: {
                type: 'web',
                isDesktop: function() { return true; },
                isMobile: function() { return false; },
                isTablet: function() { return false; }
            }
        };
    }
};

// Auto-init YaGames
if (window.YaGames) {
    YaGames.init().catch(e => console.log('YaGames init error:', e));
}
