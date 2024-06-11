const fs = require('fs');
const val = require('validator');
const checker = require('./public/functions');
const yargs = require('yargs')


//use of the fs module to create files
//fs.writeFileSync('node.txt','I live here now')

//using imported fies
//checker()

//use of validator for validaion of email
// const email = "test@example.com";
// if (val.isEmail(email)) {
//     console.log("The email address is valid.");
// } else {
//     console.log("The email address is invalid.");
// }

//using of chalk to decorate text
// (async () => {
//     const chalk = (await import('chalk')).default;
//     console.log(chalk.blue('hello') + "world" + chalk.red('hello'));
// })();


// receiving user input
// const command = process.argv[2]
// if (command === 'add') {
//  console.log('Adding note!')
// } else if (command === 'remove') {
//  console.log('Removing note!')
// }


//using yargs to recieve more complex user input
const argv = yargs
  .command('hello', 'Prints a greeting message', {}, (argv) => {
    console.log('Hello, world!');
  })
  .command('greet <name>', 'Prints a greeting message with the provided name', (yargs) => {
    yargs.positional('name', {
      describe: 'The name to greet',
      type: 'string'
    });
  }, (argv) => {
    console.log(`Hello, ${argv.name}!`);
  })
  .help()
  .argv;


//Note app with the use of yargs
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    let note = {
        "title": argv.title,
        "body": argv.body
    }
    fs.writeFileSync('note.txt',JSON.stringify(note),
    console.log("note created"))
  }
})
.command('delete', 'deletes note', {}, (argv) => {
    fs.unlinkSync("note.txt"),
    console.log("note deleted")})
.help()
.argv;


// methods with functions
// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     printGuestList() {
//     console.log('Guest list for ' + this.name)
    
//     this.guestList.forEach((guest) => {
//     console.log(guest + ' is attending ' + this.name)
//     })
//     }
//    }
//    event.printGuestList()

// using the find method
const users = [{
    name: 'Ben tenson',
    age: 24
   },{
    name: 'Gwen tenson',
    age: 24
   },{
    name: 'Kevin eleven',
    age: 27
   }]
   const user = users.find((user) => user.name === 'Gwen tenson')
   console.log(user)

//using the node debugger to pause
debugger

console.log('debugging')
   