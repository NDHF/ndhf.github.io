var standardRoom = [0, 1, 2, 3];

var northWall = ["wall", 1, 2, 3];

var southWall = [0, 1, "wall", 3];

var undefinedObject = {zArray: undefined};

// var standardRoom = [1, 2, 3, 4];

var museumArray = [

    [ undefinedObject, undefinedObject, undefinedObject, undefinedObject ],
    [ undefinedObject, undefinedObject, {RoomText: "You are in the farming exhibit", zArray: standardRoom}, undefinedObject],
    [ undefinedObject, undefinedObject, {RoomText: "You are in the kitchen", zArray: standardRoom}, undefinedObject ],
    [ undefinedObject, {RoomText: "You are in the high school room", zArray: southWall}, {RoomText: "You are in the mining equipment Room", zArray: standardRoom}, undefinedObject ],
    [ undefinedObject, {RoomText: "You are in the business exhibit", zArray: northWall}, {RoomText: "You are in the foyer.", zArray: standardRoom}, undefinedObject ],
    [ undefinedObject, undefinedObject, {RoomText: "You are in the front yard.", zArray: standardRoom}, undefinedObject ],
    [ undefinedObject, undefinedObject, undefinedObject, undefinedObject ]

    ];