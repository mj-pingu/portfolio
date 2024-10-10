// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const thesis = async (args: string[]): Promise<string> => {
return 'Built a blood donation tracking app that works like a charm on both iOS and Android. ' +
'Users could easily book donation slots, check if they are eligible, and even see which hospitals had the blood types they needed for transfusions. ' +
'The coolest part? It was all powered by a single codebase, earning the app the Best Thesis award for making life-saving easier on any device!';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const freecookies = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D`);

  return 'Opening free cookies...';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const zapier = async (args: string[]): Promise<string> => {
  window.open(`https://imgur.com/a/ZncV8tO`);
  
  return ` 
  Things I've done for Zapier!
<ul>
  <li>- Developed automations via Zapier integrations, optimizing scheduling systems and notifications.</li>
  <li>- Automated repetitive tasks through Zapier by creating code-based graphics for efficient photo generation.</li>
  <li>- Automatically generated write-ups for clients to streamline communication and reporting.</li>
  <li>- Implemented automated commission and invoice processing for accounts to enhance financial efficiency.</li>
</ul>
  `;
};

export const woo = async (args: string[]): Promise<string> => {
  window.open(`https://imgur.com/a/d3j4Poo`);
  
  return ` 
  Things I've done for Wordpress + WooCommerce!
<ul>
  <li>- Developed a landing page to support buyers and sellers in the property management sector, enhancing user engagement and resource accessibility.</li>
  <li>- Designed and implemented an asset shop tailored for sales agents, managing the shop database and integrating a connected payment platform to streamline transactions.</li>
</ul>
  `;
};

export const codegraphics = async (args: string[]): Promise<string> => {
  window.open(`https://imgur.com/a/rtdNQ5D`);
  
  return ` 
  Coded Graphics!
<ul>
  <li>- Created scalable graphics from scratch using code, facilitating the automation of repetitive publication materials for diverse applications.</li>
  <li>- Developed document (PDF) generators to streamline content creation and enhance efficiency in producing formatted materials.</li>
</ul>
  `;
};


// Banner
export const banner = (args?: string[]): string => {
  return `
'########::'####:'##::: ##::'######:::'##::::'##:
 ##.... ##:. ##:: ###:: ##:'##... ##:: ##:::: ##:
 ##:::: ##:: ##:: ####: ##: ##:::..::: ##:::: ##:
 ########::: ##:: ## ## ##: ##::'####: ##:::: ##:
 ##.....:::: ##:: ##. ####: ##::: ##:: ##:::: ##:
 ##::::::::: ##:: ##:. ###: ##::: ##:: ##:::: ##:
 ##::::::::'####: ##::. ##:. ######:::. #######::
..:::::::::....::..::::..:::......:::::.......:::

⠀⣠⣴⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣀⣤⠶⠒⡖⠦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⡇⠀⠀⣠⣾⣿⣷⣟⣿⡾⠷⢾⣽⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⠁⠀⢰⣿⡿⣛⢛⡛⣿⣧⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣸⣿⣿⣿⣿⣿⡟⠀⠀⢸⣿⣳⣟⣯⣟⣾⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⡇⠀⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠘⢿⣿⣿⣿⣷⣤⣤⣾⣿⣿⠟⠙⠋⠉⠉⠁⠀⠀⠈⠙⠻⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⠻⢭⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣹⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⡟⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣸⠁⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢸⠏⣿⣿⣿⣿⣧⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠘⢿⣿⣿⣿⣿⣦⡀⠀
⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠈⠛⢿⣿⣿⣿⣿⡄
⠀⠀⠀⠀⠀⠀⠀⠈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⣠⡴⠃⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠁
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣈⣻⣾⣶⣤⣤⣀⣀⣀⣤⣶⣼⣶⣼⣋⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠔⢒⡉⠡⠘⢌⠡⢋⠽⡇⠀⠀⠀⢠⠞⣉⠋⠱⠡⠌⡙⠲⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠸⣧⡲⣌⡉⣄⠉⣄⣣⣮⠿⠃⠀⠀⠀⢯⡔⡡⣈⠁⢂⡐⣀⢡⣈⣷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⠉⠉⠉⠉⠉⠉⠁⣀⠀⠀⠀⠀⠀⠈⠙⠓⠛⠛⠓⠓⠚⠓⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
