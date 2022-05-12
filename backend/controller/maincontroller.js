const axios = require('axios');

exports.getAllFromAPI = async (req, res, next) => {
    
    const options = {
        method: 'GET',
        url: 'https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species',
        headers: {
          'X-RapidAPI-Host': 'list-of-freshwater-aquarium-fish-species.p.rapidapi.com',
          'X-RapidAPI-Key': '4893700f43mshd95fe9cea56fa86p188b8bjsn8a2f9b51f989'
        }
      };
      
      axios.request(options).then(function (response) {
          var merged = response.data;
            res.json({
            Thedata:merged
        })
      }).catch(function (error) {
            res.status(404).json({
            success: false,
            error: error.message
        })
      });

}
