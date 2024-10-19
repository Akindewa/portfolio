// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: "https://f1d67a2c9b1893be382fb1961032d3a9@o4508138355097600.ingest.us.sentry.io/4508138383212544",
    

//   tracesSampleRate: 1,


//   debug: false,

//   replaysOnErrorSampleRate: 1.0,


//   replaysSessionSampleRate: 0.1,


//   integrations: [
//     Sentry.replayIntegration({
//       maskAllText: true,
//       blockAllMedia: true,
//     }),
//     Sentry.feedbackIntegration({
//       colorScheme: "dark",
//     }),
//   ],
// });