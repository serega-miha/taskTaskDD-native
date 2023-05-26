
import { addAllCards,filterAllCards,ggg  } from "./modules/cards.js";
import { phoneDB } from "./modules/dataBase.js";
import { scrollDown } from "./modules/scrollDown.js";
import { theme } from "./modules/theme.js";
import { popupCard } from "./modules/popupCard.js";









addAllCards(phoneDB, '#telephone');
addAllCards(phoneDB, '#caseCards');
addAllCards(phoneDB, '#accessoriesCards');



filterAllCards('#telephone', '#phone');
filterAllCards('#caseCards', '#caseTab');
filterAllCards('#accessoriesCards', '#accessoriesTab');


popupCard();
theme();
scrollDown();