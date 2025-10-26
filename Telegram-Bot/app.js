const axios = require('axios');
const { Telegraf } = require('telegraf')
require('dotenv').config();


const bot = new Telegraf(process.env.BOTTOKEN);
try{

bot.start((ctx) => ctx.reply('Welcome to Mukesh\'s bot'));

bot.command('go', (ctx) => ctx.reply('Going'));

bot.command('projects', async(ctx) => { 
    const response = await axios.get('');//To-dos
    const data=response.data;
    ctx.reply(data);

});

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.on('text', (ctx) => {
    if(ctx.update.message.text=="I love you"){
ctx.reply("Love you too human!");
    }
    else{
    ctx.reply('Sorry,I understand only commands!');
    };
});


bot.launch();
}
catch{
    console.log("Invalid Command!");
}

//for reference -> https://www.npmjs.com/package/telegraf