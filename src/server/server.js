// Получаем массив товаров
export const getListPproducts = async (b24) => {
    try {
        const requestFetch = await b24.callMethod("lists.element.get", {
            IBLOCK_TYPE_ID: "lists",
            IBLOCK_ID: 27,
        });
        console.log("requestFetch", requestFetch);

        const json = await requestFetch.json();
        console.log("requestFetch", requestFetch);

        return json;
    } catch (e) {
        console.log("ERROR:", e);
    }
};