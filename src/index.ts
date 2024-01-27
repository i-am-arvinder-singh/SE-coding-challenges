import { main } from './wc-tool/main';

main().then(() => {
    console.log('Done');
}).catch((err) => {
    console.error(err);
});

