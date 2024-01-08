export function money (value : number) : string {
    return value.toLocaleString('pt-br', {minimumFractionDigits: 2})
}

export function lorem() : string {
    return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur harum suscipit, quo accusantium perferendis placeat possimus soluta quas laudantium tempora voluptates, vel est dolorum officiis excepturi sit, dolores voluptate necessitatibus?";
}