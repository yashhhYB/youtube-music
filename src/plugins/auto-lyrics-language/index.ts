export default createPlugin({
  name: 'Auto Lyrics Language',
  restartNeeded: false,
  config: { enabled: true, preferredLanguages: ['en', 'es'] },
  backend: {
    start() {
      // hook into song metadata
    },
    onConfigChange(newConfig) { /* Update logic */ },
  },
  renderer: {
    onPlayerApiReady(api, context) {
      api.onSongChange(async (song) => {
        const lang = detectPreferredLang(song, context.getConfig().preferredLanguages);
        setLyricsLang(lang);
      });
    }
  }
});
