const {google} = require('googleapis');

const analytics = google.analyticsreporting('v4');

function queryData() {
    return new Promise(function (resolve, reject) {
        analytics.reports.batchGet({
            auth: oauth2Client,
            resource: {
                reportRequests: [{
                    viewId: 'ga:34234232',
                    dateRanges: [{
                        startDate: day,
                        endDate: day,
                    }],
                    metrics: [{
                        expression: 'ga:sessions',
                    }, {
                        expression: 'ga:pageviews'
                    }, {
                        expression: 'ga:bounceRate',
                    }],
                    dimensions: [{
                        name: 'ga:date'
                    },{
                        name: 'ga:deviceCategory'
                    }]
                }],
            }
        }, function (err, results) {
            if (err) {
                reject(err)
            } else {
                
            }
        })
    })
}
