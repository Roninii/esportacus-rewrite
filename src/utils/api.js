export const esportacus = {
  sec: `?token=rzHaDh7xA20vAeJw57j7-VK4Jq5BwrLMKlhQ5z79ouEE15DuhU8`,
  path: `https://api.pandascore.co`,
  corsAnywhere: `https://cors-anywhere.herokuapp.com/`,
  games: [
    { name: "League of Legends", slug: "lol" },
    { name: "Overwatch", slug: "ow" },
    { name: "Dota 2", slug: "dota2" },
    { name: "Counter-Strike: Global Offensive", slug: "cs:go" },
    { name: `PlayerUnknown's Battlegrounds`, slug: "pubg" }
  ],

  sortList(list) {
    return list.sort((a, b) => {
      // higher in alphabet
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      // lower in alphabet
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      // names are equal
      return 0;
    });
  },

  async leagues() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/leagues${this.sec}`
    );
    const leagues = await res.json();

    return leagues;
  },

  async teams() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/teams${this.sec}`
    );
    const teams = await res.json();
    const sortedTeams = await this.sortList(teams);

    return sortedTeams;
  },

  async players() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/players${this.sec}`
    );
    const players = await res.json();
    const sortedPlayers = await this.sortList(players);

    return sortedPlayers;
  }
};
