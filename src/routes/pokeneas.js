const express = require('express');
const router = express.Router();
const pokeneas = require('../data/pokeneasData');
const os = require('os'); 

router.get('/json', (req, res) => {
  const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = os.hostname();  
  res.json({
    id: randomPokenea.id,
    name: randomPokenea.name,
    height: randomPokenea.height,
    ability: randomPokenea.ability,
    containerId: containerId
  });
});

router.get('/imagen', (req, res) => {
  const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = os.hostname();  
  res.send(`
    <div style="text-align: center;">
      <img src="${randomPokenea.image}" alt="${randomPokenea.name}" width="200"/>
      <p><em>${randomPokenea.philosophicalQuote}</em></p>
      <p>Container ID: ${containerId}</p>
    </div>
  `);
});

module.exports = router;

