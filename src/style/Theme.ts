const theme = {
    palette: {
      primary: {
        main: '#5d3ebc',
        light: '#f3f0fe',
        dark: '#CC4400'
      },
      secondary: {
        main: '#7849f7',
        light: '',
        dark: ''
      },
      accent: {
        main: '#ffd300',
        light: '',
        dark: ''
      },
      attention: {
        main: '#db471e',
        light: '#F04A4A',
        dark: '#BD3A3A'
      },
      background: {
        body: '#fafafa',
        base: '#f5f5f5',
        alt1: '#697488',
        alt2: '#484848'
      },
      text: {
        primary: '#191919'
      }
    },
    spacing: (multiplier = 1) => `${4 * multiplier}px`,
    borderRadius: '4px',
    typography: {
      h1: {
        'font-weight': 'bold',
        'font-size': '68px'
      },
      h2: {
        'font-weight': 'bold',
        'font-size': '50px'
      },
      h3: {
        'font-weight': 'bold',
        'font-size': '38px'
      },
      h4: {
        'font-weight': 'bold',
        'font-size': '28px'
      },
      h5: {
        'font-weight': 'bold',
        'font-size': '22px'
      },
      h6: {
        'font-weight': 'bold',
        'font-size': '16px'
      },
      body: {
        'font-weight': 'normal',
        'font-size': '14px'
      },
      button: {
        'font-weight': 'bold',
        'font-size': '14px',
        'text-transform': 'uppercase'
      }
    }
  };
  
  export default theme;