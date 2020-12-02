var trails = [{                                   //set variable
  "type":"Feature",                               //define variable type
  "properties":{                                  //properties holds data about feature
    "trail_name":"Larch Lane Trail"
  },                                              //close properties
  "geometry":{                                    //define geometry
    "type":"LineString",                          //define type of geometry -- linestring = continuous line feature
    "coordinates":[                               //All coordinates of line feature, all coordinates of containted in brackets,
      [-71.830063273720128,42.258708084231166],   //each coordinate within own brackets, coordinates separated by commas
      [-71.830256090000859,42.258787690003146],
      [-71.830419410000758,42.258846530003197],
      [-71.830614170000828,42.258929770003107],
      [-71.830754670000715,42.258991920003147],
      [-71.830882800000708,42.25905416000311],
      [-71.831061690000837,42.259128980003204],
      [-71.831170010000761,42.259168470003182],
      [-71.831272990000826,42.259183040003087],
      [-71.831415250000717,42.259286890003118],
      [-71.831547230000794,42.259338280003149],
      [-71.83169322000073,42.259360740003167],
      [-71.831789430000811,42.259406100003169],
      [-71.831922650000763,42.259498150003147],
      [-71.832027770000749,42.259563120003129],
      [-71.832148220000747,42.259616150003161],
      [-71.832257730000691,42.259655620003187],
      [-71.832441880000786,42.259741470003206],
      [-71.832560290000686,42.259797320003216],
      [-71.832671810000804,42.2598600800032],
      [-71.83279861000085,42.259920600003127],
      [-71.832905040000782,42.259981510003222],
      [-71.833019900000835,42.260025960003169]
    ]                                             //close coordinates
  }                                              //close geometry
},{                                               //close first feature, open next, repeat for each unique feature
  "type":"Feature",
  "properties":{
    "trail_name":" "
  },
  "geometry":{
    "type":"LineString",
    "coordinates":[
      [-71.834226750000838,42.258354440003203],
      [-71.834161980000729,42.258387540003149],
      [-71.834156030000784,42.258454970003179],
      [-71.834036420000771,42.258553410003167],
      [-71.833934240000843,42.258655570003164],
      [-71.833809440000621,42.258752300003167],
      [-71.833744300000845,42.258782580003157],
      [-71.833661770000788,42.258857640003129],
      [-71.833744300000845,42.258782580003157],
      [-71.833661770000788,42.258857640003129],
      [-71.83360272000084,42.258935600003156],
      [-71.833562970000784,42.259014980003158]
      ]
  }
},{
  "type":"Feature",
  "properties":{
    "trail_name":"East-West Trail"
  },
  "geometry":{
    "type":"LineString",
    "coordinates":[
      [-71.837722680000724,42.257427210003151],
      [-71.837667510000841,42.257450970003113],
      [-71.837489460000796,42.257513820003162],
      [-71.837307570000846,42.257581300003196],
      [-71.837033870000823,42.257617290003196],
      [-71.836790730000857,42.257595030003102],
      [-71.836520100000712,42.257568560003136],
      [-71.836381900000802,42.257561230003127],
      [-71.836155290000789,42.257506940003175],
      [-71.835918170000824,42.257460380003138],
      [-71.835807420000805,42.25746307000319],
      [-71.835672390000866,42.257527530003102],
      [-71.835562040000795,42.257575080003122],
      [-71.835450780000713,42.257589090003236],
      [-71.835346060000816,42.257619560003171],
      [-71.835224400000783,42.257604040003166],
      [-71.835091580000778,42.257583600003144],
      [-71.834913600000775,42.257521040003148],
      [-71.834746180000778,42.257491330003148],
      [-71.83457405000064,42.257502960003144],
      [-71.834448590000662,42.257528270003128],
      [-71.834333010000677,42.257519740003183],
      [-71.834209430000797,42.257433390003186],
      [-71.834010490000608,42.257395080003157],
      [-71.83392006000085,42.257410910003173],
      [-71.833829240000867,42.257482670003213],
      [-71.833764460000836,42.257556670003169],
      [-71.833714610000854,42.257693050003162],
      [-71.833661120000841,42.257786440003208],
      [-71.833585410000822,42.257884150003179],
      [-71.833543590000644,42.25796827000314],
      [-71.833505840000655,42.258013640003163],
      [-71.833403650000847,42.258044280003155],
      [-71.833303200000842,42.258066960003156],
      [-71.833165760000782,42.258085930003212],
      [-71.833038230000597,42.258100710003205],
      [-71.832933890000831,42.258116950003185],
      [-71.83283902000062,42.258110500003134],
      [-71.832754830000837,42.258087040003161],
      [-71.83264215000068,42.258052670003138],
      [-71.832536690000708,42.258019350003153],
      [-71.832389110000733,42.258001460003108],
      [-71.832281570000831,42.257992370003194],
      [-71.83218693000066,42.257983270003116],
      [-71.832096130000622,42.257954190003133],
      [-71.831983940000725,42.257894450003128],
      [-71.831896090000825,42.257824980003157],
      [-71.831818640000662,42.257767910003146],
      [-71.831732140000739,42.257715340003166],
      [-71.831622090000835,42.257664710003205],
      [-71.831517430000815,42.257620870003144],
      [-71.831397880000836,42.257568670003195],
      [-71.831285720000778,42.257537230003187],
      [-71.831167680000831,42.257567640003124],
      [-71.831060850000711,42.25760066000322],
      [-71.830962910000792,42.257652760003197],
      [-71.830872420000631,42.257713940003121],
      [-71.830785240000779,42.257789670003163],
      [-71.830739150000682,42.257875680003146],
      [-71.830702130000816,42.257963180003166],
      [-71.830652680000867,42.258049660003138],
      [-71.830584510000719,42.258140220003163],
      [-71.830511050000851,42.258222880003146],
      [-71.830446380000822,42.258295370003111],
      [-71.830372740000826,42.258368790003161],
      [-71.830305380000794,42.258445620003172],
      [-71.830253780000831,42.258518240003156],
      [-71.830192020000808,42.258600760003162],
      [-71.83010980000077,42.258658020003125],
      [-71.830076970000718,42.258695020003195],
      [-71.830063273720128,42.258708084231166],
      [-71.829963943080855,42.258734828178142]
      ]
  }
},{
  "type":"Feature",
  "properties":{
    "trail_name":"Obadiah Trail"
  },
  "geometry":{
    "type":"MultiLineString",                               //MultiLineString is collection of linestrings
    "coordinates":[[                                       //Double bracket to contain collection of linestrings
      [-71.834226750000838,42.258354440003203],
      [-71.834329510000714,42.258391090003158],
      [-71.834431720000794,42.258460900003179],
      [-71.834501490000619,42.258492830003206],
      [-71.834563230000853,42.258545590003187],
      [-71.834639050000789,42.258601230003222],
      [-71.834702610000789,42.258643840003216],
      [-71.83480393000076,42.258704890003173],
      [-71.83490172000063,42.258767950003183],
      [-71.834984420000708,42.258824170003138],
      [-71.835064300000596,42.258845470003223],
      [-71.835141900000821,42.258855830003114],
      [-71.835222530000777,42.258828700003171],
      [-71.835331550000816,42.258774810003203],
      [-71.835417250000688,42.258727850003162],
      [-71.835518830000609,42.258673930003198],
      [-71.835574770000591,42.25862042000319],
      [-71.83560231000078,42.258553110003206],
      [-71.835610370000836,42.258469660003158],
      [-71.835594880000642,42.258400320003133],
      [-71.835523180000806,42.25830165000319],
      [-71.835441450000857,42.258178800003151],
      [-71.835407850000848,42.258100620003134],
      [-71.835396010000821,42.258017240003149],
      [-71.835377940000825,42.257957720003176],
      [-71.835336820000819,42.257880470003137],
      [-71.835358600000845,42.257808130003198],
      [-71.835372680000816,42.257733630003202],
      [-71.835331130000824,42.257690490003185],
      [-71.835288450000846,42.257639070003194],
      [-71.835247734902495,42.257607016815285]],              //End of first linestring
      [[-71.835372680000816,42.257733630003202],             //start of second line string
      [-71.835385480000824,42.257668810003153],
      [-71.835399012703405,42.25763049223896],
      [-71.835414862409536,42.257599540829062]]              //end of second linestring
    ]                                                       //close coordinates
    }
},{
  "type":"Feature",
  "properties":{
    "trail_name":"Appleton Trail"
  },
  "geometry":{
    "type":"LineString",
    "coordinates":[
      [-71.830602094968867,42.257933315804401],
      [-71.830663220000815,42.25795445000319],
      [-71.830742290000686,42.257987100003135],
      [-71.830812914820712,42.258016066318],
      [-71.830973990000814,42.258082130003139],
      [-71.831134970000804,42.258134220003171],
      [-71.831312300000789,42.258200800003159],
      [-71.831492620000802,42.258271870003178],
      [-71.831676910000823,42.258345460003206],
      [-71.831859240000853,42.258412430003155],
      [-71.832018630000832,42.258458040003156],
      [-71.83213549000078,42.258498680003143],
      [-71.832241610000864,42.258545840003194],
      [-71.832350640000811,42.258590350003125],
      [-71.832465940000802,42.258623980003165],
      [-71.832582610000784,42.258673790003158],
      [-71.83268652000082,42.258716740003166],
      [-71.832797320000751,42.258748480003142],
      [-71.832904270000782,42.258787630003177],
      [-71.833020900000648,42.258828960003171],
      [-71.833141000000879,42.258869950003209],
      [-71.83327057000082,42.25891449000315],
      [-71.833389020000823,42.258957460003145],
      [-71.833484070000821,42.25899913000319],
      [-71.833562970000784,42.259014980003158],
      [-71.833676810000782,42.25905662000315]
    ]
  }
},{
  "type":"Feature",
  "properties":{
    "trail_name":"Facility Road"
  },
  "geometry":{
    "type":"LineString",
    "coordinates":[
      [-71.834226750000838,42.25835444000321],
      [-71.834184720000579,42.258297440003126],
      [-71.83413096892815,42.258258668562647],
      [-71.834049800000855,42.258250230003242],
      [-71.833947780000855,42.258274660003188],
      [-71.833855290000827,42.258252490003215],
      [-71.833762350000839,42.25819542000319],
      [-71.833661150000495,42.258117220003193],
      [-71.83356797000053,42.258053230003192],
      [-71.833490600000829,42.258036880003168],
      [-71.833403650000847,42.258044280003155],
      [-71.833303200000842,42.258066960003156],
      [-71.833165760000782,42.258085930003212],
      [-71.833038230000597,42.258100710003205],
      [-71.832933890000831,42.258116950003185],
      [-71.832839020000648,42.258110500003234],
      [-71.832754830000837,42.258087040003275],
      [-71.83264215000068,42.258052670003138],
      [-71.832536690000708,42.258019350003153],
      [-71.832389110000733,42.258001460003229],
      [-71.832281570000546,42.257992370003194],
      [-71.83218693000066,42.257983270003216],
      [-71.832096130000622,42.257954190003133],
      [-71.831983940000725,42.257894450003128],
      [-71.831896090000825,42.257824980003157],
      [-71.831818640000662,42.257767910003246],
      [-71.831732140000739,42.257715340003266],
      [-71.831622090000835,42.257664710003205],
      [-71.831517430000545,42.257620870003208],
      [-71.831397880000836,42.25756867000328],
      [-71.831280390000657,42.257507120003133],
      [-71.831180500000627,42.257457910003154],
      [-71.831105385239212,42.257407230242791]
      ]
  }
},{
  "type":"Feature",
  "properties":{
    "trail_name":"Beech Trail"
  },
  "geometry":{
    "type":"LineString",
    "coordinates":[
      [-71.832917100000813,42.259983370003134],
      [-71.833002300000828,42.260010260003142],
      [-71.83309048000082,42.259961190003111],
      [-71.833151010000805,42.259891750003163],
      [-71.833217720000803,42.259863520003137],
      [-71.833264560000814,42.259812410003136],
      [-71.833258620000805,42.259763430003119],
      [-71.833170660000803,42.259670680003126],
      [-71.833172930000813,42.259538710003127],
      [-71.83304579000081,42.25948639000314],
      [-71.833009910000825,42.259362680003157],
      [-71.832840610000815,42.259292770003128],
      [-71.832725210000831,42.259253730003103],
      [-71.832637510000808,42.259199330003142],
      [-71.832761420000807,42.259124950003141],
      [-71.832805110000805,42.25909093000314],
      [-71.832871520000822,42.259043290003156],
      [-71.832933120000817,42.258996880003124],
      [-71.833002530000812,42.258851010003156]
    ]
  }
}];
