const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (config) => {
    // Define your desired options for the plugin
    const monacoOptions = {
        languages: ['javascript', 'typescript'], // Include specific languages
    };

    try {
        config.plugins.push(new MonacoWebpackPlugin(monacoOptions));
    } catch (error) {
        console.error('Error creating MonacoWebpackPlugin:', error);
    }

    return config;
};
