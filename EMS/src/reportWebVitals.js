const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// This is a JavaScript module that exports a function called `reportWebVitals`. Here's an explanation of the code:

// - The function takes a single argument called `onPerfEntry`, which is a function that will be called with a performance entry object when a web vitals metric is collected.

// - The `if` statement checks if the `onPerfEntry` argument exists and is a function before continuing.

// - The `import` statement loads the `web-vitals` package, which provides functions for collecting web vitals metrics like Cumulative Layout Shift (CLS), First Input Delay (FID), First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Time to First Byte (TTFB).

// - When the `web-vitals` package is loaded, the functions for each web vitals metric are extracted and called with the `onPerfEntry` function. This allows the `onPerfEntry` function to receive a performance entry object containing data about the metric that was collected.

// - Finally, the `reportWebVitals` function is exported as the default export of the module.

// In a React application, `reportWebVitals` is typically used to collect and report web vitals metrics to analytics tools like Google Analytics. By default, `create-react-app` includes `reportWebVitals` in the `index.js` file, which allows the app to collect and report web vitals metrics automatically.