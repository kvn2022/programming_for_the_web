const { createApp } = Vue;

createApp({
  data () {
    return {
      newRockObj: {
        crystalName: '',
        images: '',
        meaning: '',
        characteristics: '',
        properties: '',
        collected: false
      },
      crystals: [
        {
          crystalName: 'Amber',
          images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kaliningrad_Amber_Combine_Big_Amber.jpg/320px-Kaliningrad_Amber_Combine_Big_Amber.jpg',
          meaning: 'Soul-ar Power',
          characteristics: 'Transparent to opaque and may contain insects, organisms and/or plant matter. Resembling honey, its colour varies in shades of golden brown, orange and yellow.',
          properties: 'Balance, Cleansing, Vitality',
          collected: false
        }, {
          crystalName: 'Rose Quartz',
          images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Quartz_rose_%28Br%C3%A9sil%29_2.JPG/320px-Quartz_rose_%28Br%C3%A9sil%29_2.JPG',
          meaning: 'Pure Love',
          characteristics: 'A glassy translucent pink variety of quartz, normally found in large masses. Colour varies from light pale pink to rose red.',
          properties: 'Love, Growth, Calm',
          collected: true
        }, {
          crystalName: 'Amethyst',
          images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Amethyst._Magaliesburg%2C_South_Africa.jpg/320px-Amethyst._Magaliesburg%2C_South_Africa.jpg',
          meaning: 'Inner Serenity',
          characteristics: 'A violet transparent terminated crystal, normally found in clusters.',
          properties: 'Intuition, Meditation, Protection',
          collected: true
        }, {
          crystalName: 'Aquamarine',
          images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Beryl-Schorl-aqu06a.jpg/320px-Beryl-Schorl-aqu06a.jpg',
          meaning: 'A Voyage of Seeking Truth',
          characteristics: 'Transparent to opaque crystal with pale blue-green hue.',
          properties: 'Balance, Clarity, Communication',
          collected: false
        }, {
          crystalName: 'Ulexite',
          images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Inderite%2C_Ulexite-237314.jpg/320px-Inderite%2C_Ulexite-237314.jpg',
          meaning: 'Paradigm Shift',
          characteristics: 'Transparent to translucent and white to colourless.',
          properties: 'Dreamwork, Creativity, Meditation',
          collected: false
        }
      ]
    }
  },
  methods: {
    submitHandler () {
      console.log('submited');
      this.crystals = this.crystals.concat(this.newRockObj);
      this.resetForm();
    },
    resetForm () {
      this.newRockObj = {
        crystalName: '',
        images: '',
        meaning: '',
        characteristics: '',
        properties: '',
        collected: ''
      }
    },
    deleteItem (item) {
      this.crystals = this.crystals.filter(crystal => {
        return crystal !== item;
      });
    }
  }
}).mount('#myCollectionApp');
