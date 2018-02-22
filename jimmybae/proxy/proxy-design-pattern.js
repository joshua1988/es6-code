var logger = (function() {
  var log = '';
  return {
    add: function(msg) {
      log += '[logger] ' + msg + '\n';
    },
    show: function() {
      console.log(log); log = '';
    }
  }
})();

function Level() {
  this.getLevel = function(name) {
    if(name === 'jimmy') {
      return 'Deputy Manager';
    } else if(name === 'jifromkorea') {
      return 'P4';
    } else if(name === 'joshua') {
      return 'P2';
    } else if(name === 'sosunny') {
      return 'P1';
    } else {
      return '';
    }
  }
}

function LevelProxy() {
  var level = new Level();
  var levelCache = {};

  return {
    getLevel: function(name) {
      if(!levelCache[name]) {
        levelCache[name] = level.getLevel(name);
      }
      logger.add(name + ': ' + levelCache[name]);
      return levelCache[name];
    },
    getCount: function() {
      return Object.keys(levelCache).length;
    }
  }
}

var level = new LevelProxy();

level.getLevel('jimmy');
level.getLevel('jifromkorea');

logger.add('------------------------------');
logger.add('Cache size: ' + level.getCount());
logger.add('\n');

level.getLevel('joshua');
level.getLevel('sosunny');

logger.add('------------------------------');
logger.add('Cache size: ' + level.getCount());

logger.show();
/*
[logger] jimmy: Deputy Manager
[logger] jifromkorea: P4
[logger] ------------------------------
[logger] Cache size: 2
[logger]

[logger] joshua: P2
[logger] sosunny: P1
[logger] ------------------------------
[logger] Cache size: 4
*/