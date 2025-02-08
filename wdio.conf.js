// const allure = require('allure-commandline');

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    //
    // =====
    // Hooks
    // =====
    // onComplete: function() {
    //     const reportError = new Error('Could not generate Allure report');
    //     const generation = allure(['generate', 'allure-results', '--clean']);
    //     return new Promise((resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             5000
    //         );

    //         generation.on('exit', function(exitCode) {
    //             clearTimeout(generationTimeout);

    //             if (exitCode !== 0) {
    //                 return reject(reportError);
    //             }

    //             console.log('Allure report successfully generated');
    //             resolve();
    //         });
    //     });
    // }
}