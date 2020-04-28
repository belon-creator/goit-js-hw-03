'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const newValues = function () {
  const userKeys = Object.keys(user);

  for (let key of userKeys) {
    console.log(`${key} : ${user[key]}`);
  }
};

newValues();
