
export default async function fetchTodos() {
    const response = await fetch("https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos");
    if(!response.ok) {
        throw new Error("Error ao recumperar task da API");
    }

    return await response.json();
}