const dados = require('./database');


CadastrarUsuario("12345","56789","Gb1_King")

async function CadastrarUsuario(var1,var2,var3) {
	// Create a new user
	const NovoUsuario = await dados.create({ DiscordID: var1, SteamID: var2, Nome_Usuario_Palworld: var3});
	// by this point, the user has been saved to the database!
	console.log("Novo Usuario auto-generated ID:", NovoUsuario.id);
}


CadastrarUsuario(1,"12345","56789","Gb1_King",10/10/2024,11/11/2024)

async function CadastrarUsuario(var1,var2,var3,var4,var5) {
	// Create a new user
	const NovoUsuario = await Guild.create({ DiscordID: var1, SteamID: var2, Nome_Usuario_Palworld: var3, createdAt: var4,updatedAt: var5 });
	// by this point, the user has been saved to the database!
	console.log("Novo Usuario auto-generated ID:", NovoUsuario.id);

}