TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "hfovMin": 75,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C5EFBB2C_D486_0871_41D5_3E760BA82124",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Terasz",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 116,
           "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -105.25,
        "hfov": 12.28,
        "pitch": -27.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -105.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 108,
           "width": 233,
           "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -27.56
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C6A91113_D486_7851_41DA_8105058328FF",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Bej\u00e1rat",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 41,
           "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -126.24,
        "hfov": 8.7,
        "pitch": -6.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -126.24,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.7,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 713,
           "width": 147,
           "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.56
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_t.jpg",
  "label": "Terasz",
  "partial": false,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "buttonZoomOut": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonMoveRight": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonPlayRight": {
   "borderSize": 0,
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonPause": {
   "borderSize": 0,
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "toggle",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "verticalAlign": "middle"
  },
  "displayPlaybackBar": true,
  "buttonPlayLeft": {
   "borderSize": 0,
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveLeft": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonMoveUp": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": {
   "borderSize": 0,
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "verticalAlign": "middle"
  },
  "preloadEnabled": false,
  "buttonRestart": {
   "borderSize": 0,
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "minWidth": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "cursor": "hand",
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "paddingBottom": 0,
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration"
 },
 {
  "id": "panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": 20.82,
   "pitch": 1.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 68,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C5E42CFA_D49A_09D3_41E9_5DD41C1C28C8",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Bej\u00e1rat",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 82,
           "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -163.7,
        "hfov": 37.69,
        "pitch": -15.47
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -163.7,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 37.69,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1609,
           "width": 660,
           "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -15.47
       }
      ]
     },
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C4037F1A_D486_0853_41D7_AFF2D6B11196",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 136,
           "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 90.62,
        "hfov": 13.11,
        "pitch": -35.81
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 90.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 113,
           "width": 273,
           "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -35.81
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DE808994_D486_0850_41E0_A2E014B925F9_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE808994_D486_0850_41E0_A2E014B925F9",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE808994_D486_0850_41E0_A2E014B925F9_t.jpg",
  "label": "Terasz",
  "partial": false,
  "hfovMax": 124,
  "hfov": 360
 },
 {
  "id": "panorama_DE808994_D486_0850_41E0_A2E014B925F9_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 112,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C4B88814_D49A_0857_41E0_F7DAB85F8AE8",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "El\u0151t\u00e9r",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 121,
           "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": 151.86,
        "hfov": 72.93,
        "pitch": -20.72
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 151.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 72.93,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 2047,
           "width": 1238,
           "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -20.72
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C451C87B_D49A_08D1_41A7_720ECB7D3D9C",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Udvar",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 130,
           "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -2.06,
        "hfov": 93.53,
        "pitch": -12.17
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -2.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 93.53,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 2048,
           "width": 1332,
           "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -12.17
       }
      ]
     },
     {
      "id": "overlay_C0E349AA_D48E_0873_41C8_558F5B5EB599",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.7,
      "yaw": -162.7,
      "bleachingDistance": 0.4,
      "pitch": 40.03
     },
     {
      "inertia": true,
      "id": "panorama_DE727346_D486_1830_41C6_75B41E7D51F5_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE727346_D486_1830_41C6_75B41E7D51F5",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE727346_D486_1830_41C6_75B41E7D51F5_t.jpg",
  "label": "Cip\u0151s",
  "partial": false,
  "hfovMax": 132,
  "hfov": 360
 },
 {
  "id": "panorama_DE727346_D486_1830_41C6_75B41E7D51F5_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -88.69,
   "pitch": -7.51
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 67,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C481CBDB_D49A_0FD1_41B8_1EC024C1C427",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Nappali",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 102,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -112.22,
        "hfov": 51.52,
        "pitch": -15.49
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -112.22,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 51.52,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1813,
           "width": 933,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -15.49
       }
      ]
     },
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C5AB0590_D49A_182F_41E4_77B2D18CE46C",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 86,
           "width": 175,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 59.19,
        "hfov": 14.66,
        "pitch": -45.28
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 59.19,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 173,
           "width": 351,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -45.28
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C4963BE3_D49E_0FF1_41BB_91D97B591050",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Cip\u0151s",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 59,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "yaw": 167.34,
        "hfov": 32.2,
        "pitch": -18.03
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 167.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 32.2,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1878,
           "width": 558,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -18.03
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C07F5F1A_D4BA_0853_41E9_47BEE560A53D",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "F\u00fcrd\u0151",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 27,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "yaw": 39.47,
        "hfov": 10.13,
        "pitch": -14.67
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 39.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.13,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1223,
           "width": 171,
           "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -14.67
       }
      ]
     },
     {
      "id": "overlay_C0E4117B_D48E_18D1_41CD_0CCE5A88B58B",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.7,
      "yaw": 146.16,
      "bleachingDistance": 0.4,
      "pitch": 49.37
     },
     {
      "inertia": true,
      "id": "panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_t.jpg",
  "label": "El\u0151szoba",
  "partial": false,
  "hfovMax": 124,
  "hfov": 360
 },
 {
  "id": "panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 62.03,
   "pitch": -7.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 59,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C55238E3_D48A_09F1_41C6_D7E42D838215",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Nappali",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 78,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": 165.24,
        "hfov": 15.61,
        "pitch": -13.45
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 165.24,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.61,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 673,
           "width": 265,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -13.45
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C55A75A2_D48A_1870_41DE_070937C48102",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Cip\u0151s",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 32,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": 139.31,
        "hfov": 8.34,
        "pitch": -15.58
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 139.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.34,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 852,
           "width": 141,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -15.58
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C6A9DD6A_D48A_08F3_41E1_9307183E54BA",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "F\u00fcrd\u0151",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 110,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "yaw": -104.41,
        "hfov": 83.05,
        "pitch": -11.72
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -104.41,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 83.05,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 2048,
           "width": 1130,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -11.72
       }
      ]
     },
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C5449E18_D48A_085F_41CF_63A0D0DBDBE8",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "L\u00e9pcs\u0151 (Pihen\u0151)",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 149,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "yaw": 70.89,
        "hfov": 16.55,
        "pitch": -21.22
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 70.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 299,
           "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -21.22
       }
      ]
     },
     {
      "id": "overlay_C20CBD5A_D49E_08D3_41AE_E72499470B3B",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.5,
      "yaw": 137.1,
      "bleachingDistance": 0.82,
      "pitch": 21.64
     },
     {
      "inertia": true,
      "id": "panorama_DE958974_D486_08D7_41E2_91C331072412_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE958974_D486_08D7_41E2_91C331072412.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE958974_D486_08D7_41E2_91C331072412",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE958974_D486_08D7_41E2_91C331072412_t.jpg",
  "label": "El\u0151szoba",
  "partial": false,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "id": "panorama_DE958974_D486_08D7_41E2_91C331072412_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.25,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": 84.94
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.07,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": 124.47
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -51.39,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": 164.56
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.7,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": -172.86
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": 160.98,
   "pitch": -11.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 80,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C606FA1B_D48E_0851_41DE_A27CE64FE0A8",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "El\u0151t\u00e9r",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 87,
           "url": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -164.08,
        "hfov": 27.37,
        "pitch": -14.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -164.08,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.37,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1077,
           "width": 471,
           "url": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -14.57
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_t.jpg",
  "label": "F\u00fcrd\u0151szoba",
  "partial": false,
  "hfovMax": 130,
  "hfov": 360
 },
 {
  "id": "panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -40.96,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": -91.32
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.29,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": -124.54
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -42.33,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": -131.41
    },
    {
     "easing": "cubic_in_out",
     "yawSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.42,
     "pitchSpeed": 33.1,
     "path": "shortest",
     "targetYaw": 104.71
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": -45.54,
   "pitch": -0.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C7C77FF7_D48E_07D0_41D8_C1003CF8BF2B",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "El\u0151t\u00e9r",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 134,
           "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -118.88,
        "hfov": 10.63,
        "pitch": -48.05
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -118.88,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 268,
           "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -48.05
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C01D0404_D48A_3837_41E8_BA8F09241884",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Nappali",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 74,
           "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -91.87,
        "hfov": 10.96,
        "pitch": 24.28
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -91.87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.96,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 496,
           "width": 185,
           "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 24.28
       }
      ]
     },
     {
      "id": "overlay_C27D1CE9_D49E_09F0_41AA_4804A2595949",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.48,
      "yaw": -79.52,
      "bleachingDistance": 0.75,
      "pitch": 43.05
     },
     {
      "inertia": true,
      "id": "panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_t.jpg",
  "label": "L\u00e9pcs\u0151",
  "partial": false,
  "hfovMax": 123,
  "hfov": 360
 },
 {
  "id": "panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 108,
   "yaw": -98.04,
   "pitch": -5.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 73,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C67F4D83_D48A_0831_41EA_201D6341EB25",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "H\u00e1l\u00f3 Szoba",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 85,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": 67.74,
        "hfov": 25.72,
        "pitch": -15.4
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 67.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 25.72,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1025,
           "width": 441,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -15.4
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C1C2029A_D48A_1853_41E8_137C0E2C2717",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "\u00c1kos Szoba",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 90,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": 103.42,
        "hfov": 27.8,
        "pitch": -17.14
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 103.42,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.8,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1057,
           "width": 479,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -17.14
       }
      ]
     },
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_C184151D_D4BE_1851_41E7_D64B411C37F2",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "L\u00e9pcs\u0151",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 184,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": -108.22,
        "hfov": 22.11,
        "pitch": -15.31
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -108.22,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 419,
           "width": 387,
           "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -15.31
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DD7CB462_D486_18F3_419E_A1051DC2D915",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_t.jpg",
  "label": "Fenti nappali",
  "partial": false,
  "hfovMax": 128,
  "hfov": 360
 },
 {
  "id": "panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 115,
   "yaw": 86.8,
   "pitch": -4.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 69,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C707203A_D486_1853_41E4_D4957930B52E",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Nappali",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 79,
           "url": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": 91.34,
        "hfov": 28.79,
        "pitch": -18.38
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 91.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 28.79,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1254,
           "width": 496,
           "url": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -18.38
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_t.jpg",
  "label": "H\u00e1l\u00f3szoba 1",
  "partial": false,
  "hfovMax": 118,
  "hfov": 360
 },
 {
  "id": "panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 106,
   "yaw": -46.29,
   "pitch": -1.65
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 72,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "id": "overlay_C75508BB_D486_0851_4182_06E63F2914A8",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Nappali",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 84,
           "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": 118.91,
        "hfov": 27.79,
        "pitch": -17.24
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 118.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.79,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1127,
           "width": 478,
           "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -17.24
       }
      ]
     },
     {
      "inertia": true,
      "id": "panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_t.jpg",
  "label": "H\u00e1l\u00f3szoba 2",
  "partial": false,
  "hfovMax": 119,
  "hfov": 360
 },
 {
  "id": "panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": -90.65,
   "pitch": -6.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 80,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": true,
      "id": "overlay_DBED92B0_D486_386F_41D9_5167C46B5482",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB, this.camera_21BED7F7_323D_4E75_41A2_4662CB5C6CE8); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 63,
           "width": 138,
           "url": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 4,
        "hfov": 14.01,
        "pitch": -31.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 127,
           "width": 277,
           "url": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -31.56
       }
      ]
     },
     {
      "id": "overlay_C3AF1283_D49E_3831_41EA_1F718F2BB14B",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.7,
      "yaw": -83.63,
      "bleachingDistance": 0.4,
      "pitch": 53.49
     },
     {
      "inertia": true,
      "id": "panorama_DEEBFE00_D486_0830_41E2_404D59F47564_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "hfov": 15.6,
      "angle": 0
     }
    ],
    "thumbnailUrl": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "id": "panorama_DEEBFE00_D486_0830_41E2_404D59F47564",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DEEBFE00_D486_0830_41E2_404D59F47564_t.jpg",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "hfovMin": 62,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": true,
         "id": "overlay_DA59548B_D486_3831_41E1_CDAAE953D719",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "El\u0151t\u00e9r",
           "click": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 77,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "yaw": 135.48,
           "hfov": 15.05,
           "pitch": -9.84
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 135.48,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.05,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 652,
              "width": 255,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -9.84
          }
         ]
        },
        {
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": true,
         "id": "overlay_DA7A9172_D487_F8D0_41E4_AB9737A6E4ED",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Konyha",
           "click": "this.startPanoramaWithCamera(this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564, this.camera_21A7E7EC_323D_4E9B_419C_456B4E7D18FA); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 77,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 78.4,
           "hfov": 7.91,
           "pitch": -30.69
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 78.4,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 99,
              "width": 155,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -30.69
          }
         ]
        },
        {
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_C3AE0B26_D49A_0873_41CF_96EC7FC2EB0E",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 11, this.audio_C3361F75_D49A_08D1_4180_599D27CB9493)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 44,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -41.33,
           "hfov": 4.91,
           "pitch": -20.85
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -41.33,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 100,
              "width": 88,
              "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -20.85
          }
         ]
        },
        {
         "autoplay": false,
         "class": "VideoPanoramaOverlay",
         "video": {
          "class": "VideoResource",
          "height": 1280,
          "width": 720,
          "mp4Url": "media/video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA.mp4"
         },
         "id": "overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3",
         "loop": false,
         "rotationX": 26.74,
         "vfov": 18.42,
         "roll": -11.56,
         "click": "if(this.overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3.get('state') != 'playing'){ this.overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3.play(); } else { this.overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3.stop(); }",
         "enabledInCardboard": true,
         "rotationY": -24.27,
         "pitch": -23.84,
         "yaw": -23.71,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 1280,
            "width": 720,
            "url": "media/overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3_t.png"
           }
          ]
         },
         "useHandCursor": true,
         "hfov": 33.19,
         "stateChange": "if(this.overlay_10EC6B49_1D09_70EA_4193_7157E9E277B3.get('state') == 'playing'){ this.pauseGlobalAudios(); } else { this.resumeGlobalAudios(); }"
        },
        {
         "inertia": true,
         "id": "panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_tcap0",
         "rotate": true,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 1000,
            "width": 1000,
            "url": "media/panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_tcap0.png"
           }
          ]
         },
         "class": "TripodCapPanoramaOverlay",
         "hfov": 15.6,
         "angle": 0
        }
       ],
       "thumbnailUrl": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB.jpeg"
         }
        ]
       }
      }
     ],
     "class": "Panorama",
     "id": "panorama_D91DB866_D48A_08F3_41D8_62D487190CCB",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_t.jpg",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564",
       "yaw": 78.4,
       "backwardYaw": 4,
       "distance": 1
      }
     ],
     "label": "Nappali",
     "partial": false,
     "hfovMax": 123,
     "hfov": 360
    },
    "yaw": 4,
    "backwardYaw": 78.4,
    "distance": 1
   }
  ],
  "label": "Konyha",
  "partial": false,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "id": "panorama_DEEBFE00_D486_0830_41E2_404D59F47564_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 108,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB",
 {
  "id": "panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -131.34,
   "pitch": -10.44
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A",
    "camera": "this.panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, true, -1, this.effect_21FC39AF_31FD_C295_418D_EE113D005264, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_23462132_31FF_438C_419D_9977D67BD095, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_23462132_31FF_438C_419D_9977D67BD095, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE808994_D486_0850_41E0_A2E014B925F9",
    "camera": "this.panorama_DE808994_D486_0850_41E0_A2E014B925F9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, true, -1, this.effect_21FF99B0_31FD_C28B_41C7_A580DA8BDFE0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_2346D132_31FF_438C_41BD_6FEAC861209B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_2346D132_31FF_438C_41BD_6FEAC861209B, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE727346_D486_1830_41C6_75B41E7D51F5",
    "camera": "this.panorama_DE727346_D486_1830_41C6_75B41E7D51F5_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, true, -1, this.effect_269C9DEC_322B_4294_41C3_9A6E8826AEB9, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, false, -1, this.effect_269CBDEC_322B_4294_41A0_CABB0DB74B43, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, false, -1, this.effect_269CBDEC_322B_4294_41A0_CABB0DB74B43, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9",
    "camera": "this.panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, true, -1, this.effect_269D7DED_322B_4294_41C1_0030760A408F, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D1DED_322B_4294_41C3_C80E8202D86E, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D1DED_322B_4294_41C3_C80E8202D86E, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE958974_D486_08D7_41E2_91C331072412",
    "camera": "this.panorama_DE958974_D486_08D7_41E2_91C331072412_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, true, -1, this.effect_269DFDED_322B_4294_41BF_5EE0192AFC8E, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D9DED_322B_4294_41BE_88E6478DF797, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D9DED_322B_4294_41BE_88E6478DF797, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A",
    "camera": "this.panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, true, -1, this.effect_269CDDED_322B_4294_41C2_A57E157ABEB9, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, false, -1, this.effect_269CFDED_322B_4294_41BF_058B2E0A4C64, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, false, -1, this.effect_269CFDED_322B_4294_41BF_058B2E0A4C64, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB",
    "camera": "this.panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, true, -1, this.effect_269D7DEE_322B_4294_4192_4842476197E2, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, false, -1, this.effect_269D6DEE_322B_4294_41A2_D3B331C639A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, false, -1, this.effect_269D6DEE_322B_4294_41A2_D3B331C639A0, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD7CB462_D486_18F3_419E_A1051DC2D915",
    "camera": "this.panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, true, -1, this.effect_269DCDEE_322B_4294_41B9_40955A870EFA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, false, -1, this.effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, false, -1, this.effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43",
    "camera": "this.panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, true, -1, this.effect_269E7DEE_322B_4294_41C4_54851B9D96E8, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269E6DEE_322B_4294_41C2_29901B0BD01C, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269E6DEE_322B_4294_41C2_29901B0BD01C, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E",
    "camera": "this.panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, true, -1, this.effect_269ECDEE_322B_4294_41C0_5D3572F983E7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564",
    "camera": "this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, true, -1, this.effect_269F4DEF_322B_4294_41C1_1F31FDFE58BE, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, false, -1, this.effect_269F1DEF_322B_4294_41C2_326FDD3CEC03, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, false, -1, this.effect_269F1DEF_322B_4294_41C2_326FDD3CEC03, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB",
    "camera": "this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0); this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, true, -1, this.effect_269FFDEF_322B_4294_41BA_588A383A6A61, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, false, -1, this.effect_269F9DEF_322B_4294_41BC_8F83DFF3B254, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, false, -1, this.effect_269F9DEF_322B_4294_41BC_8F83DFF3B254, 'hideEffect', false); this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A",
    "camera": "this.panorama_DE24D946_D48A_0833_41E8_FE44FA74C32A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, true, -1, this.effect_21FC39AF_31FD_C295_418D_EE113D005264, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_23462132_31FF_438C_419D_9977D67BD095, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_23462132_31FF_438C_419D_9977D67BD095, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE808994_D486_0850_41E0_A2E014B925F9",
    "camera": "this.panorama_DE808994_D486_0850_41E0_A2E014B925F9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, true, -1, this.effect_21FF99B0_31FD_C28B_41C7_A580DA8BDFE0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_2346D132_31FF_438C_41BD_6FEAC861209B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2, false, -1, this.effect_2346D132_31FF_438C_41BD_6FEAC861209B, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE727346_D486_1830_41C6_75B41E7D51F5",
    "camera": "this.panorama_DE727346_D486_1830_41C6_75B41E7D51F5_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 2, 3); this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, true, -1, this.effect_269C9DEC_322B_4294_41C3_9A6E8826AEB9, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, false, -1, this.effect_269CBDEC_322B_4294_41A0_CABB0DB74B43, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20285E53_31ED_418C_4193_864D13449326, false, -1, this.effect_269CBDEC_322B_4294_41A0_CABB0DB74B43, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9",
    "camera": "this.panorama_DE87DE48_D486_083F_419D_E36C77CBD2F9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, true, -1, this.effect_269D7DED_322B_4294_41C1_0030760A408F, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D1DED_322B_4294_41C3_C80E8202D86E, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D1DED_322B_4294_41C3_C80E8202D86E, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE958974_D486_08D7_41E2_91C331072412",
    "camera": "this.panorama_DE958974_D486_08D7_41E2_91C331072412_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 4, 5); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, true, -1, this.effect_269DFDED_322B_4294_41BF_5EE0192AFC8E, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D9DED_322B_4294_41BE_88E6478DF797, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249, false, -1, this.effect_269D9DED_322B_4294_41BE_88E6478DF797, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A",
    "camera": "this.panorama_DD7AF432_D486_1853_41DF_C13CAF1C455A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 5, 6); this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, true, -1, this.effect_269CDDED_322B_4294_41C2_A57E157ABEB9, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, false, -1, this.effect_269CFDED_322B_4294_41BF_058B2E0A4C64, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9, false, -1, this.effect_269CFDED_322B_4294_41BF_058B2E0A4C64, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB",
    "camera": "this.panorama_DE910EF7_D486_09D1_41E2_F3CDD7988BFB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 6, 7); this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, true, -1, this.effect_269D7DEE_322B_4294_4192_4842476197E2, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, false, -1, this.effect_269D6DEE_322B_4294_41A2_D3B331C639A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F, false, -1, this.effect_269D6DEE_322B_4294_41A2_D3B331C639A0, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD7CB462_D486_18F3_419E_A1051DC2D915",
    "camera": "this.panorama_DD7CB462_D486_18F3_419E_A1051DC2D915_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, true, -1, this.effect_269DCDEE_322B_4294_41B9_40955A870EFA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, false, -1, this.effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165, false, -1, this.effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43",
    "camera": "this.panorama_DE8D89F2_D486_0BD3_41DF_B02983836C43_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 8, 9); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, true, -1, this.effect_269E7DEE_322B_4294_41C4_54851B9D96E8, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269E6DEE_322B_4294_41C2_29901B0BD01C, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269E6DEE_322B_4294_41C2_29901B0BD01C, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E",
    "camera": "this.panorama_DE266806_D486_0833_41B7_F0DA6D0D5C8E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 9, 10); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, true, -1, this.effect_269ECDEE_322B_4294_41C0_5D3572F983E7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C, false, -1, this.effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564",
    "camera": "this.panorama_DEEBFE00_D486_0830_41E2_404D59F47564_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 10, 11); this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, true, -1, this.effect_269F4DEF_322B_4294_41C1_1F31FDFE58BE, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, false, -1, this.effect_269F1DEF_322B_4294_41C2_326FDD3CEC03, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596, false, -1, this.effect_269F1DEF_322B_4294_41C2_326FDD3CEC03, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB",
    "camera": "this.panorama_D91DB866_D48A_08F3_41D8_62D487190CCB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist, 11, 0); this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, true, -1, this.effect_269FFDEF_322B_4294_41BA_588A383A6A61, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, false, -1, this.effect_269F9DEF_322B_4294_41BC_8F83DFF3B254, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F, false, -1, this.effect_269F9DEF_322B_4294_41BC_8F83DFF3B254, 'hideEffect', false)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_1163791C_1D07_D06A_41B9_5BE672BB5381_t.jpg",
  "class": "Video",
  "label": "video-1637574323",
  "video": {
   "class": "VideoResource",
   "height": 1280,
   "width": 720,
   "mp4Url": "media/video_1163791C_1D07_D06A_41B9_5BE672BB5381.mp4"
  },
  "width": 720,
  "id": "video_1163791C_1D07_D06A_41B9_5BE672BB5381",
  "loop": false,
  "height": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "id": "MainViewerVideoPlayer",
  "buttonRestart": "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
  "displayPlaybackBar": true
 },
 {
  "class": "PlayList",
  "id": "playList_219E67D4_323D_4E8B_41C4_3917706711D1",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_1163791C_1D07_D06A_41B9_5BE672BB5381",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_219E67D4_323D_4E8B_41C4_3917706711D1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_219E67D4_323D_4E8B_41C4_3917706711D1, 0, this.video_1163791C_1D07_D06A_41B9_5BE672BB5381)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA_t.jpg",
  "class": "Video",
  "label": "video-1637574323",
  "video": {
   "class": "VideoResource",
   "height": 1280,
   "width": 720,
   "mp4Url": "media/video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA.mp4"
  },
  "width": 720,
  "id": "video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA",
  "loop": false,
  "height": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_219E47D5_323D_4EB5_41C1_5F41EA1F8732",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_219E47D5_323D_4EB5_41C1_5F41EA1F8732, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_219E47D5_323D_4EB5_41C1_5F41EA1F8732, 0, this.video_13C6B112_1D0B_F07E_41B6_4C8B67A2BEFA)"
   }
  ]
 },
 {
  "audio": {
   "mp3Url": "media/audio_C3361F75_D49A_08D1_4180_599D27CB9493.mp3",
   "oggUrl": "media/audio_C3361F75_D49A_08D1_4180_599D27CB9493.ogg",
   "class": "AudioResource"
  },
  "id": "audio_C3361F75_D49A_08D1_4180_599D27CB9493",
  "autoplay": true,
  "class": "MediaAudio",
  "data": {
   "label": "Danika House"
  }
 },
 {
  "id": "camera_21A7E7EC_323D_4E9B_419C_456B4E7D18FA",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 108,
   "yaw": -176,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_21BED7F7_323D_4E75_41A2_4662CB5C6CE8",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -101.6,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_21FC39AF_31FD_C295_418D_EE113D005264"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_23462132_31FF_438C_419D_9977D67BD095"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_21FF99B0_31FD_C28B_41C7_A580DA8BDFE0"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2346D132_31FF_438C_41BD_6FEAC861209B"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269C9DEC_322B_4294_41C3_9A6E8826AEB9"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269CBDEC_322B_4294_41A0_CABB0DB74B43"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269D7DED_322B_4294_41C1_0030760A408F"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269D1DED_322B_4294_41C3_C80E8202D86E"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269DFDED_322B_4294_41BF_5EE0192AFC8E"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269D9DED_322B_4294_41BE_88E6478DF797"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269CDDED_322B_4294_41C2_A57E157ABEB9"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269CFDED_322B_4294_41BF_058B2E0A4C64"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269D7DEE_322B_4294_4192_4842476197E2"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269D6DEE_322B_4294_41A2_D3B331C639A0"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269DCDEE_322B_4294_41B9_40955A870EFA"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269E7DEE_322B_4294_41C4_54851B9D96E8"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269E6DEE_322B_4294_41C2_29901B0BD01C"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269ECDEE_322B_4294_41C0_5D3572F983E7"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269F4DEF_322B_4294_41C1_1F31FDFE58BE"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269F1DEF_322B_4294_41C2_326FDD3CEC03"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269FFDEF_322B_4294_41BA_588A383A6A61"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_269F9DEF_322B_4294_41BC_8F83DFF3B254"
 },
 "this.effect_21FC39AF_31FD_C295_418D_EE113D005264",
 "this.effect_23462132_31FF_438C_419D_9977D67BD095",
 "this.effect_21FF99B0_31FD_C28B_41C7_A580DA8BDFE0",
 "this.effect_2346D132_31FF_438C_41BD_6FEAC861209B",
 "this.effect_269C9DEC_322B_4294_41C3_9A6E8826AEB9",
 "this.effect_269CBDEC_322B_4294_41A0_CABB0DB74B43",
 "this.effect_269D7DED_322B_4294_41C1_0030760A408F",
 "this.effect_269D1DED_322B_4294_41C3_C80E8202D86E",
 "this.effect_269DFDED_322B_4294_41BF_5EE0192AFC8E",
 "this.effect_269D9DED_322B_4294_41BE_88E6478DF797",
 "this.effect_269CDDED_322B_4294_41C2_A57E157ABEB9",
 "this.effect_269CFDED_322B_4294_41BF_058B2E0A4C64",
 "this.effect_269D7DEE_322B_4294_4192_4842476197E2",
 "this.effect_269D6DEE_322B_4294_41A2_D3B331C639A0",
 "this.effect_269DCDEE_322B_4294_41B9_40955A870EFA",
 "this.effect_269DEDEE_322B_4294_419E_CC68AE9CA1C1",
 "this.effect_269E7DEE_322B_4294_41C4_54851B9D96E8",
 "this.effect_269E6DEE_322B_4294_41C2_29901B0BD01C",
 "this.effect_269ECDEE_322B_4294_41C0_5D3572F983E7",
 "this.effect_269EEDEE_322B_4295_41B1_E2C9DE0FA4B0",
 "this.effect_269F4DEF_322B_4294_41C1_1F31FDFE58BE",
 "this.effect_269F1DEF_322B_4294_41C2_326FDD3CEC03",
 "this.effect_269FFDEF_322B_4294_41BA_588A383A6A61",
 "this.effect_269F9DEF_322B_4294_41BC_8F83DFF3B254"
], "children": [
 {
  "playbackBarHeadOpacity": 1,
  "progressBorderRadius": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipPaddingRight": 6,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "paddingTop": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontWeight": "normal",
  "toolTipOpacity": 0.85,
  "progressBarBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "shadow": false,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontColor": "#606060",
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "progressBottom": 1,
  "progressHeight": 20,
  "playbackBarRight": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "transitionMode": "blending",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 2,
  "toolTipBackgroundColor": "#F6F6F6",
  "borderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 2,
  "playbackBarBottom": 10,
  "borderSize": 0,
  "width": "100%",
  "toolTipFontSize": 12,
  "height": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarOpacity": 1,
  "minHeight": 50,
  "toolTipShadowVerticalLength": 0,
  "paddingRight": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#AAAAAA",
  "top": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "progressRight": 10,
  "progressLeft": 10,
  "paddingBottom": 0,
  "progressOpacity": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBackgroundOpacity": 1,
  "left": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000"
 },
 {
  "creationPolicy": "delayed",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "height": 142,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "contentOpaque": false,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "left": "0%",
  "verticalAlign": "middle",
  "children": [
   {
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "width": 40,
      "height": "100%",
      "gap": 4,
      "paddingLeft": 0,
      "minWidth": 20,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "shadow": false,
      "paddingRight": 0,
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "class": "Container",
      "contentOpaque": false,
      "layout": "vertical",
      "scrollBarColor": "#000000",
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ]
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "borderSize": 0,
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "mode": "toggle",
      "minWidth": 0,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "class": "IconButton",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "cursor": "hand",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "transparencyActive": true,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "verticalAlign": "middle"
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "creationPolicy": "delayed",
    "borderSize": 0,
    "width": 360,
    "paddingLeft": 0,
    "height": "95.07%",
    "gap": 4,
    "scrollBarMargin": 2,
    "minWidth": 360,
    "paddingTop": 0,
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "shadow": false,
    "paddingRight": 0,
    "overflow": "hidden",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "contentOpaque": false,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle"
   }
  ]
 },
 {
  "itemLabelFontSize": 14,
  "itemBackgroundColorRatios": [],
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 20,
  "itemBackgroundOpacity": 0,
  "itemLabelFontWeight": "normal",
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "minWidth": 20,
  "itemThumbnailScaleMode": "fit_outside",
  "scrollBarMargin": 2,
  "paddingTop": 10,
  "itemThumbnailShadow": true,
  "scrollBarOpacity": 0.5,
  "rollOverItemBackgroundOpacity": 0,
  "shadow": false,
  "itemThumbnailOpacity": 1,
  "itemLabelFontFamily": "Arial",
  "itemBorderRadius": 0,
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom",
  "layout": "vertical",
  "itemThumbnailWidth": 75,
  "class": "ThumbnailList",
  "playList": "this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist",
  "itemOpacity": 1,
  "backgroundColorDirection": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "borderRadius": 5,
  "backgroundOpacity": 0.21,
  "itemPaddingLeft": 3,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowBlurRadius": 8,
  "backgroundColorRatios": [
   0
  ],
  "itemLabelTextDecoration": "none",
  "verticalAlign": "top",
  "selectedItemLabelFontWeight": "bold",
  "itemVerticalAlign": "middle",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontStyle": "normal",
  "borderSize": 0,
  "width": 128.8,
  "height": "55%",
  "itemThumbnailShadowVerticalLength": 3,
  "gap": 10,
  "rollOverItemLabelFontWeight": "normal",
  "horizontalAlign": "left",
  "itemThumbnailHeight": 75,
  "minHeight": 20,
  "itemLabelHorizontalAlign": "center",
  "paddingRight": 20,
  "itemThumbnailShadowOpacity": 0.54,
  "top": "0%",
  "itemBackgroundColor": [],
  "itemBackgroundColorDirection": "vertical",
  "scrollBarColor": "#FFFFFF",
  "id": "ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972",
  "itemPaddingBottom": 3,
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelGap": 9,
  "selectedItemLabelFontColor": "#FFCC00",
  "itemPaddingTop": 3,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "paddingBottom": 10,
  "itemPaddingRight": 3,
  "right": "0.24%",
  "itemThumbnailShadowColor": "#000000"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF",
   "#CCCCCC"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.13,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_21D0A280_31F7_468C_41C5_7C34C5DF30A2",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>TERASZ                  </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:22px;\"><B>Nyugodt k\u00f6rnyezet, szomsz\u00e9d nem basztat. (R\u00f3zsika n\u00e9ni k\u00f6zbe cs\u00fany\u00e1n k\u00f6h\u00f6g)</B></SPAN></SPAN></DIV></div>",
  "data": {
   "name": "Terasz"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0.73,
   1
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_20285E53_31ED_418C_4193_864D13449326",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>Cip\u0151s                       </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Itt sz\u00e9pen leh\u00fazod a cip\u0151det</B></SPAN></SPAN></DIV></div>",
  "data": {
   "name": "Cip\u0151s"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_20EF1366_31ED_4794_41BA_9C2D65224249",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>El\u0151szoba                </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Itt a kab\u00e1todat teszed fel \u00e9s eld\u00f6nt\u00f6d, hogy hova akarsz menni</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "El\u0151szoba"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_213C2903_31D6_C38D_41A3_F443361EF58F",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>Nappali                    </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>TV-t n\u00e9zel, vend\u00e9gek elf\u00e9rnek, \u00fcnnepekkor j\u00f3l lehet enni.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "Nappali"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_20B65673_31D5_C18C_41C7_11A00F83F596",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>Konyha                    </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Itt is ehetsz</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "Konyha"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_2085B55E_31D5_C3B4_41B9_FFC9126DE4F9",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>F\u00fcrd\u0151                       </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Ha nem szeretsz mosakodni akkor mindegy</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "F\u00fcrd\u0151"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_209BEDBB_31D6_C2F3_41B6_0B0D4AACE49F",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>L\u00e9pcs\u0151                     </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Itt m\u00e9sz fel az emeletre </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "L\u00e9pcs\u0151"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_2368FABE_322A_C6F4_41BC_EF7CEECE8165",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>Nappali                     </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Egy m\u00e1sik nappali csak magasabban</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "Fenti nappali"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 },
 {
  "shadowVerticalLength": 2,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 20,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 20,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "minHeight": 1,
  "shadow": true,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "shadowBlurRadius": 7,
  "top": "5%",
  "shadowHorizontalLength": 2,
  "visible": false,
  "shadowOpacity": 0.19,
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "bottom": "70%",
  "id": "HTMLText_2394C978_322D_427B_41C7_9F7D2C38DD1C",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B><U>H\u00e1l\u00f3                          </U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Itt tudsz aludni</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "H\u00e1l\u00f3szoba"
  },
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 10,
  "backgroundOpacity": 0.91,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "backgroundColorRatios": [
   0
  ],
  "left": "2%",
  "right": "69%"
 }
], 
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "delayed",
 "height": "100%",
 "gap": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingRight": 0,
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "start": "this.syncPlaylists([this.ThumbnailList_FE3F9318_EE12_4C6D_41DA_981D0A9EA972_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "verticalAlign": "top"
})