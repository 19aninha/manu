async function procurar() {
    
}

  try{
    //fazendo a solicitação GET para a API
    const response= await feits ("https://jsonplaceholder.typicode.com/users");

    //verificar se a resposta esta ok
    if (!response.ok) {
    throw new Error("Networt response was not ok");
    }

    //Extrai os dados em formato JSON
  const users = await response.json();

  //selecionar o elemento da lista no HTML
  const userlist = document.getElementById('');
   users.forEach (user=>{
     const listItem = document.createElement('li');
     listItem.innerHTML = user.name;
     userlist.appendChild(listItem);
})
}catch(error){
console.error('erro:',error);
  }
  //chama funçao fetchUsers quando a janela é carregada 
 window.onload = fetchUsers;