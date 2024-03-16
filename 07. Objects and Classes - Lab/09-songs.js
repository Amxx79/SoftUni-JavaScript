function solve(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time;
        }
    }

    let allSongs = {};
    let printAllSongs = [];

    let count = input.shift();
    for (let i = 0; i < count; i++) {
        let [typeList, name, time] = input.shift().split('_');

        if (!allSongs[typeList]) {
            allSongs[typeList] = [];
        }
        let newSong = new Song(typeList, name, time)
        allSongs[typeList].push(newSong);
        printAllSongs.push(newSong);
    }

    let wantedTypeList = input.shift();
    if (wantedTypeList === 'all') {
        for (const song of printAllSongs) {
            console.log(song.name);
        }
    } else {
        for (const song of allSongs[wantedTypeList]) {
            console.log(song.name);
        }
    }
}

    solve([3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite']
    );
    solve([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
    );
    solve([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
    );