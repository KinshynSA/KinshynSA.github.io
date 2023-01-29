export async function sendContactForm(obj){
    const token = '5639148164:AAGlJSdVxxGid_DWon8DO9X6stDkW-TZLv8';
    const chat_id = '417791533';
    const txt = JSON.stringify(obj);

    return await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${txt}`)
}