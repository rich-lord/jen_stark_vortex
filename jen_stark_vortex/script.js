//
// Vortex
//

//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.module.js';


//
// Not needed when on ArtBlocks. This creates the unique seed that genenerates everything.
//

function random_hash() {
  let chars = "0123456789abcdef";
  let result = '0x';
  for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

let tokenData;
function rnd_tokenData() {
  tokenData = {"hash": random_hash()}
}
rnd_tokenData();





//
// PALETTE DATA
//
function GetPalette(id) {
  switch(id){
    //
    // PULSE - Only
    //
    case 0: // light 4 run pulse paleette
      return [ 0x671FB2, 0xFFC878, 0xE0B8FF, 0xFFFF9F, 0x048E00, 0xB56700, 0x7226BC, 999500 ]
    case 1: // 6 run
      return [ 0xFFFB76, 0xFFD6A1, 0xFFB9AB, 0xD69CFF, 0xA1A1FF, 0x62D362, 0x827B00, 0x914C00, 0x914C00, 0x710089, 0x00139E, 0x002600 ]

    //
    // EVERTHING EXCEPT INTERPOLATE
    //
    case 2:  // 4 light colors
        return [ 0xFF8080, 0x5A72FF, 0xFFFF03, 0x00D800 ]
    case 3: // saturated to saturated rainbow  
        return [0x3f0296, 0x3939ea, 0x02a528, 0xc1bc02, 0xaf6c02, 0x931a02, 0xaf6c02, 0xc1bc02, 0x02a528, 0x3939ea, 0x3f0296, 0xae7bff, 0x78bfff, 0x8fffa9, 0xfffc9f, 0xffcf83, 0xff99ec, 0xffcf83, 0xfffc9f, 0x8fffa9, 0x78bfff, 0xae7bff]
    case 4:  // colors seperated by b/w
        return [ 0xFFFF00, 0x595959, 0xFFA015, 0x3D3D3D, 0xFF3B27, 0x282828, 0x9900FC, 0x000000, 0x4569FF, 0x595959, 0x00FF42, 0x3D3D3D, 0xFFFF00, 0x282828, 0xFFA015, 0x000000, 0xFF3B27, 0x595959, 0x9900FC, 0x3D3D3D, 0x4569FF, 0x282828, 0x00FF42, 0x000000 ]

    //
    // PULSE - can Pulse,interpolate and fade
    //
    case 5:   // 6 off colors followed by 6 on ones  
     return[ 0x7C0000, 0xAA4D00, 0xA5A000, 0x0E9100, 0x0069A3, 0x56189E, 0xFF3333, 0xFF9E03, 0xFFFF12, 0x14DD0A, 0x15A0FF, 0x9F45FF]
    case 6:  // killer new palette
     return [ 0x000000, 0x002800, 0x004F44, 0x0066BA, 0x4878FF, 0xA37DFF, 0xEF80FF, 0x000000, 0x440000, 0x703500, 0x995700, 0xD69E00, 0xFFD400, 0x000000, 0x5400B5, 0x0030F9, 0x0082F7, 0x00BFB5, 0x00E562, 0x000000, 0x631300, 0xCE00BB, 0xFF4848, 0xFF9750, 0xFFE771]
    case 7: // new - color blocks
     return [0x00f3ff, 0x03efef, 0x05e2dc, 0x05d8cd, 0x06ccbe, 0x06bfad, 0x05af9a, 0x05a089, 0x05937b, 0x04876e, 0x03755f, 0x046351, 0x064c3f, 0x053a30, 0x042821, 0x000000, 0xfff200, 0xefdd06, 0xe2cc03, 0xceb605, 0xbfa404, 0xad9104, 0x9e8004, 0x8e7303, 0x776105, 0x665304, 0x544504, 0x443703, 0x382e04, 0x282102, 0x191502, 0x000000, 0xff5ae8, 0xef56e1, 0xe256dc, 0xd353d3, 0xc14ec4, 0xac47b2, 0x9c41a3, 0x8a3d93, 0x723b7a, 0x5a3866, 0x51325b, 0x3c2542, 0x2f1d33, 0x251728, 0x100a11, 0x000000]
    case 8:   // all - very good
     return [0xfffbac, 0xfad1ab, 0xfbaeb8, 0xc287f6, 0x6c8df3, 0x079804, 0xfff915, 0xff9e3e, 0xf45193, 0x8942e5, 0x213ecc, 0x104900, 0xa59d04, 0x9b5415, 0x9e1252, 0x491993, 0x04175b, 0x0a2800, 0xa59d04, 0x9b5415, 0x9e1252, 0x8942e5, 0x213ecc, 0x104900, 0xe8dd0f, 0xf19338, 0xf45193, 0x8942e5, 0x213ecc, 0x104900, 0xfff915, 0xff9e3e, 0xf45193, 0xc287f6, 0x6c8df3, 0x079804]
 


   //
   // INTERPOLATE - Can interpolate, be static and fade
   //  
   case 9:   // *** purples, yellows and reds
        return [ 0xFFA1FF, 0x76AEFF, 0xFFB9AB, 0xD69CFF, 0xCD00D8, 0x0050A0, 0xBF4008, 0x671FB2]
   case 10:  // *** hot blend 
        return [0x630000, 0xc40900, 0xff4f12, 0xff9d00, 0xffce33, 0xffff2c, 0xd1ff10, 0x20ff00, 0x00e7ff, 0x00aaff, 0x485aff, 0x7900ed, 0x7400a5]      
    case 11:  // *** desaturated groups
        return [0xfff766, 0xf2e600, 0xddcd00, 0xbcbc00, 0xffe292, 0xffbe2e, 0xe29700, 0xad6f02, 0xffbdbd, 0xff8585, 0xff4545, 0xd80000, 0xe6bbff, 0xc26cff, 0x961dff, 0x6900d8, 0xabcbff, 0x6ca8ff, 0x1d84ff, 0x006fdd, 0xc0ffc9, 0x55ff69, 0x00dd15, 0x00b20d]
    case 12:  // ** mono 5  
        return [0x3bfffa, 0xffff00, 0x3bfffa, 0x00d88a, 0x006b56, 0x00d88a]
    case 13:   // *** deep colors
        return [0x000000, 0x00b509, 0x00770b, 0x004403, 0xffa197, 0xff735c, 0xff2400, 0xaf1500, 0xeae400, 0xc6bc00, 0x706d00, 0x444100, 0x000000, 0x00b509, 0x00770b, 0x004403, 0xffa197, 0xff735c, 0xff2400, 0xaf1500, 0xeae400, 0xc6bc00, 0x706d00, 0x444100]
    case 14:   // *** desaturated 2
        return [0xf4f403, 0xeade00, 0xc6c100, 0xa5a500, 0x848700, 0x707000, 0x848700, 0xa5a500, 0xdbd000, 0xeded00, 0xd5ff6e, 0x6fff5f, 0x15d800, 0x16af00, 0x148900, 0x16af00, 0x15d800, 0x71ff69, 0xd9ecff, 0xb3ddff, 0x7dcaff, 0x33b6ff, 0x0091c4, 0x00668e, 0x557aff, 0x8398ff, 0xaeb8ff, 0xe3d4ff, 0xfff1dc, 0xffe0b6, 0xffcb8d, 0xffb05a, 0xff952c, 0xff7900, 0xff952c, 0xffb05a, 0xffcb8d, 0xffe0b6, 0xe1d7ff, 0xc8b6ff, 0xb58fff, 0x976cff, 0x6b3bff, 0x520bff, 0x6b3bff, 0x976cff, 0xb58fff, 0xc8b6ff]
    case 15:    // *** hmmmm dark blue with red stripe
        return [0x002102, 0x281dff, 0x00aab2, 0x47ff33, 0xffff55, 0xff5555, 0xffff55, 0x47ff33, 0x00aab2]
    case 16:    // *** deep color bands
        return [0xf2ebff, 0xdfcaff, 0xc79fff, 0xb06cff, 0x9610ff, 0x7500b2, 0x480066, 0x472700, 0x7f3f00, 0xb75b00, 0xe26b00, 0xff8b2c, 0xffc197, 0xffe8dc, 0xffffff, 0xcffffe, 0x7dfff8, 0x00efef, 0x07cce0, 0x00aabc, 0x007689, 0x000000, 0x600000, 0xa30000, 0xed0000, 0xff4545, 0xff7b7b, 0xffa6a6, 0xffdede, 0xffffff, 0xbbffbb, 0x45ff45, 0x0edb0e, 0x00aa00, 0x007f03, 0x005906, 0x003506, 0x600077, 0x8d00af, 0xc200ea, 0xe64cfc, 0xf48fff, 0xfbc5ff, 0xfee3ff, 0xffffff, 0xe1e1ff, 0xbbbbff, 0x8080ff, 0x6161ff, 0x3030f2, 0x1414c1, 0x082f7c, 0x304900, 0x515100, 0x706d00, 0x938c00, 0xbaac00, 0xe2cc00, 0xffe529, 0xfffdae, 0xffffff]
    case 17:   // *** 5 short runs of 6 cols each
        return [ 0x025600, 0x297700, 0x68990A, 0xA0BA09, 0xCFE02F, 0xFBFF55, 0xE22C03, 0xFF3B73, 0xFF57DF, 0xFF88FC, 0xFFB3FF, 0xFEE9FF,0x7A5100, 0xB77500, 0xDD941F, 0xE5C439, 0xF9ED5D, 0xFFF7AE,0x2902A5, 0x2121ED, 0x136CD6, 0x31AFDB, 0x00E2B7, 0xCFFFDA,0x470099, 0x781DD9, 0xAF54F7, 0xBE83F2, 0xB7B0FF, 0xCFDCFF ]
    case 18:  // *** (unused) 3 runs of 6
        return [ 0x0000C9, 0x4302C1, 0x7100C9, 0x8D00D8, 0xBA00DB, 0xE500BA, 0x004402, 0x017201, 0x3C9900, 0xA5D300, 0xCCE800, 0xFFFF50, 0x840600, 0xC12D00, 0xFF6B06, 0xFFA81D, 0xFFDA24, 0xFFFF08]
    case 19: // strong cols
        return [0xff4545, 0xed4040, 0xce3232, 0xb72121, 0xa01212, 0x7c0000, 0xff9e03, 0xe08707, 0xc97609, 0xb7650b, 0xad5c0c, 0xa0520b, 0xffff00, 0xeae406, 0xdbd005, 0xccbe09, 0xc1af0a, 0xa5a000, 0x14dd0a, 0x1bce0d, 0x21bf10, 0x24af10, 0x279e12, 0x0e9100, 0x63cefc, 0x50a7e2, 0x3c8cce, 0x2b74bc, 0x20599e, 0x194689, 0x9f55ff, 0x8b4bef, 0x7742db, 0x6830c1, 0x5b21ad, 0x56189e]
    case 20:   // saturated groups
        return [0x250056, 0x6200c9, 0xb671ff, 0xdcabff, 0x6d0000, 0xce0202, 0xff7171, 0xffa4a4, 0x663f00, 0xaa6d00, 0xea9c00, 0xfcd060, 0x7a7700, 0xaf9e00, 0xd8c800, 0xf4dc00, 0x006005, 0x009b04, 0x00ce0a, 0x39ff4c, 0x033b8c, 0x0063ce, 0x3993ff, 0x80b4ff] 
   
    //
    // MONOS - can interpolate
    //
    case 21:  // *** mono 1
        return [0xc71dff, 0xff50f3, 0xc71dff, 0x6e2cff, 0x002bc9, 0x6e2cff]
    case 22:  //long run 1 (yellow to red)
        return [0xffea92, 0xffcb4a, 0xffa861, 0xff7155, 0xff3d1d, 0xc9006e, 0xff2400, 0xff6d2c, 0xffa852, 0xffd629, 0xf4f403, 0xeade00, 0xc6c100, 0xa5a500, 0x848700, 0x707000, 0x848700, 0xa5a500, 0xc6c100, 0xeade00, 0xf4f403]
    case 23:  // mono 3  (unused)
        return [0xffba1f, 0xff603b, 0xffba1f, 0xffff2e, 0x50ff69, 0xffff2e]
    case 24:  // mono 4 (unused - great reds)
        return [0xffa022, 0xfaff27, 0xffa022, 0xff0068, 0x6b001f, 0xff0068]
    case 25: // ** awesome long fade
        return [0x93f706, 0x00db63, 0x00bdc6, 0x129aff, 0x3976ff, 0x8648ff, 0xde00ea, 0xff2c2c, 0xff790b, 0xffae0b, 0xffdc0d, 0xffff08, 0x9be732, 0x27cb71, 0x21aeb5, 0x288eda, 0x3f6dd3, 0x6f41ca, 0xbb14c3, 0xda3c3c, 0xe07b29, 0xe6a92f, 0xedd237, 0xeeee35, 0xa4d65e, 0x4dbb7f, 0x41a0a4, 0x3f83b5, 0x4563a8, 0x593a95, 0x97289d, 0xb54c4c, 0xc17e46, 0xcda452, 0xdac961, 0xdede62, 0xadc689, 0x73aa8c, 0x629193, 0x557790, 0x4a5a7c, 0x423260, 0x743c77, 0x905b5b, 0xa18064, 0xb39f76, 0xc8bf8b, 0xcdcd8f, 0xb5b5b5, 0x9a9a9a, 0x828282, 0x6b6b6b, 0x505050, 0x2b2b2b, 0x505050, 0x6b6b6b, 0x828282, 0x9a9a9a, 0xb5b5b5, 0xbcbcbc, 0xadc689, 0x73aa8c, 0x629193, 0x557790, 0x4a5a7c, 0x423260, 0x743c77, 0x905b5b, 0xa18064, 0xb39f76, 0xc8bf8b, 0xcdcd8f, 0xa4d65e, 0x4dbb7f, 0x41a0a4, 0x3f83b5, 0x4563a8, 0x593a95, 0x97289d, 0xb54c4c, 0xc17e46, 0xcda452, 0xdac961, 0xdede62, 0x9be732, 0x27cb71, 0x21aeb5, 0x288eda, 0x3f6dd3, 0x6f41ca, 0xbb14c3, 0xda3c3c, 0xe07b29, 0xe6a92f, 0xedd237, 0xeeee35]
    case 26: // mono 6 (unused)
        return [0xfaccff, 0xdc9fff, 0x8776ff, 0x007d91, 0x005408, 0x007d91,0x8776ff, 0xdc9fff, 0xfaccff, 0xff52ff]
    case 27:  // *** double mono 
        return [0xff9fdd, 0xff1fba, 0xff9fdd, 0x9cecff, 0x00b3f2, 0x9cecff, 0xff9fdd, 0xff1fba, 0xff9fdd, 0x9cecff, 0x00b3f2, 0x9cecff, 0xff9fdd, 0xff1fba, 0xff9fdd, 0x9cecff, 0x00b3f2, 0x9cecff, 0x00a804, 0x0065c1, 0x00a804, 0x96ea03, 0xffff00, 0x96ea03, 0x00a804, 0x0065c1, 0x00a804, 0x96ea03, 0xffff00, 0x96ea03, 0x00a804, 0x0065c1, 0x00a804, 0x96ea03, 0xffff00, 0x96ea03]   
    case 28:  // ** mono 2
        return [0x96ea03, 0xffff00, 0x96ea03, 0x00a804, 0x0065c1, 0x00a804]
    //
    // STROBES - look bad when interpolating, so only use these as P_type = 2
    //
    case 29:  // col seq 1
        return [0xeac5db, 0x374c82, 0x0cbf10, 0xffe70b, 0x2626f9, 0xff83ff, 0x59037c, 0x20dbef, 0xff1a1a, 0xffc610, 0x9102d3, 0x75e203, 0xff6b3e, 0x20dbef, 0xff0068, 0xffcba4, 0x016b06, 0xffc610, 0x914320, 0x75e203, 0x5252ff, 0xffff64, 0xff6b3e]
    case 30:  // col seq 1 with faded cols in middle
        return [0x00008e, 0x64009e, 0xaa009a, 0xe00000, 0xe26803, 0xffb600, 0xffff00, 0x58ff00, 0x00d314, 0x009aaa, 0x005ef4, 0xeac5db, 0x374c82, 0x0cbf10, 0xffe70b, 0x2626f9, 0xff83ff, 0x59037c, 0x20dbef, 0xff1a1a, 0xffc610, 0x9102d3, 0x75e203, 0xff6b3e, 0x20dbef, 0xff0068, 0xffcba4, 0x016b06, 0xffc610, 0x914320, 0x75e203, 0x5252ff, 0xffff64, 0xff6b3e]
    case 31:  // col seq 2
        return [0x00f7f7, 0x007703, 0xfda9ff, 0x7f00ef, 0xff862c, 0x1631f4, 0xffff0d, 0x000000, 0x43ffb7, 0xff9e1d]
    case 32:  // col seq 3
        return [0x000054, 0x0094ce, 0x7700cc, 0xbb5cff, 0x005406, 0x0ca300, 0xc62f00, 0xff8f33, 0x7a5100, 0xfff31a, 0xa800c6, 0xff64c4, 0x2902a5, 0x335aff, 0xff4e10, 0xffa42c, 0x470099, 0xbe7bff, 0xa5006e, 0xff3ed2, 0x001cc1, 0xffa42c]
    case 33:  // purple mono strobe
        return [0xffb0ff, 0xb94dff, 0x0c00ff, 0xffb0ff, 0xb94dff, 0x0c00ff]
    case 34:   // black and white and rainbow strobe
        return [0xededed, 0xb5b5b5, 0x7c7c7c, 0x444444, 0x000000, 0xdbdbdb, 0x000000, 0xdbdbdb, 0x000000, 0xdbdbdb, 0x000000, 0xdbdbdb, 0x000000, 0xdbdbdb, 0xbfbfbf, 0xa3a3a3, 0x848484, 0x606060, 0x444444, 0x511e43, 0xc90081, 0xff4545, 0xffb206, 0xffff00, 0x4aff3b, 0x15a0ff, 0x8d45ff, 0x3b1ae2, 0x312870, 0x444444, 0x606060, 0x848484, 0xa3a3a3, 0xbfbfbf, 0xdbdbdb, 0xffffff]
    case 35:  // desaturate
        return [0xb28e47, 0x663e14, 0xb28e47, 0x94c979, 0x4a7c47, 0x94c979, 0xb28e47, 0x663e14, 0xb28e47, 0x94c979, 0x4a7c47, 0x94c979, 0xb28e47, 0x663e14, 0xb28e47, 0x94c979, 0x4a7c47, 0x94c979, 0xb76aa1, 0x662860, 0xb76aa1, 0x89d7db, 0x4851ff, 0x89d7db, 0xb76aa1, 0x662860, 0xb76aa1, 0x89d7db, 0x4851ff, 0x89d7db, 0xb76aa1, 0x662860, 0xb76aa1, 0x89d7db, 0x4851ff, 0x89d7db]
    case 36: // black and white strobe
        return [0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0x3a3a3a, 0xf4f4f4, 0xaaaaaa, 0x3a3a3a, 0xf4f4f4, 0x999999, 0x3a3a3a, 0xf4f4f4, 0xc1c1c1, 0x777777, 0x3a3a3a, 0xf4f4f4, 0xc1c1c1, 0x777777, 0x3a3a3a, 0xf4f4f4, 0xc1c1c1, 0x777777, 0x3f3f3f, 0x000000, 0xf4f4f4, 0xcecece, 0x939393, 0x606060, 0x383838, 0x000000, 0xf4f4f4, 0xd8d8d8, 0xa5a5a5, 0x727272, 0x4c4c4c, 0x303030, 0x000000, 0xf4f4f4, 0xe5e5e5, 0xc6c6c6, 0xa5a5a5, 0x7c7c7c, 0x595959, 0x3f3f3f, 0x000000]
    case 37: // color seq with double rainbow in it
        return [0xff2c2c, 0xff790b, 0xffae0b, 0xffdc0d, 0xffff08, 0x93f706, 0x00db63, 0x00bdc6, 0x129aff, 0x3976ff, 0x8648ff, 0xde00ea, 0xff2c2c, 0xff790b, 0xffae0b, 0xffdc0d, 0xffff08, 0x93f706, 0x00db63, 0x00bdc6, 0x129aff, 0x3976ff, 0x8648ff, 0xde00ea, 0xff2c2c, 0xff790b, 0xffae0b, 0xffdc0d, 0xffff08, 0x93f706, 0x00db63, 0x00bdc6, 0x129aff, 0x3976ff, 0x8648ff, 0xde00ea, 0xff2c2c, 0x0dd1ff, 0xffae0b, 0x007231, 0xffff08, 0x9708f4, 0x5cffa2, 0x028989, 0xffe315, 0x73159b, 0xff9c4a, 0x0913d3, 0xffa4a4, 0x0dff40, 0xff0d0d, 0xffda00, 0x006805, 0x8fcaff, 0xa11ae8, 0xd5ff3b, 0x1a22ba, 0xffff1a, 0xff88fc, 0x84026c, 0x22efff, 0xaa8202, 0x2c1466, 0xcdb3ff, 0x9b0000, 0x00efc7, 0x008e69, 0xffa776, 0xdb6005, 0xffff12, 0x777100, 0xa1ff64, 0x2f9300, 0x83d6ff, 0x0098ff, 0xff9ffa, 0xff0bff, 0xffe164, 0xdbb100]
    case 38:  // black and white desaturated rainbow
        return [0xf4f4f4, 0xcccccc, 0x9b9b9b, 0x727272, 0x444444, 0x000000, 0xfcfceb, 0xd8ceb4, 0xa3909b, 0x786789, 0x3d3e4c, 0x0d3814, 0xffffa1, 0xf4c28c, 0xff8ab7, 0xa56fdd, 0x4958c1, 0x0f4f0f, 0xfffb6c, 0xffad5c, 0xfc5e9e, 0x9552ff, 0x315dff, 0x005b00, 0xffffa1, 0xf4c28c, 0xff8ab7, 0xa56fdd, 0x4958c1, 0x0f4f0f, 0xfcfceb, 0xd8ceb4, 0xa3909b, 0x786789, 0x3d3e4c, 0x0d3814, 0xf4f4f4, 0xcccccc, 0x9b9b9b, 0x727272, 0x444444, 0x000000]
    case 39:  // beautiful strobe only
       return [0xd7d7d7, 0xed64a4, 0xb6b6b7, 0xaa8abf, 0x818282, 0x5e89c6, 0x3f4040, 0x3fbba0, 0x262626, 0xf8ee69, 0x000000, 0xfab26a, 0x4a4a4a, 0xf3b6d2, 0x787878, 0xa695c7, 0xb6b6b7, 0x5f99d2, 0xe8e7e7, 0x4cba83, 0xc0c0c0, 0xf7ec3a, 0x9e9e9e, 0xf9a643, 0x707171, 0xed64a4, 0x474748, 0xaa8abf, 0x262626, 0x5e89c6, 0x4f4f4f, 0x58c1b0, 0x818282, 0xf8ee5e, 0xbbbbbb, 0xf9a654]
    case 40:  // deep color strobe
        return [0x000000, 0x075601, 0x4a9600, 0xaad105, 0xffff00, 0x660000, 0xa30000, 0xe00000, 0xff4d88, 0xff83cd, 0x040172, 0x0303e2, 0x6f4dff, 0xa278ff, 0xe3aeff, 0x663500, 0xa05300, 0xd66c03, 0xff8b22, 0xffbf73]
    case 41:  // bw with blue and orange section
        return [0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xfff3e1, 0x040056, 0xffe4b8, 0x070091, 0xffbd5c, 0x0000ea, 0xff9b17, 0x2222ff, 0xffbd5c, 0x070091, 0xffe4b8, 0x040056, 0xffefd7]
    case 42:  // faded gradient
        return [0xffdefd, 0xffb8fd, 0xfb76ff, 0xfa40ff, 0xe800f4, 0xc600c1, 0xe800f4, 0xfa40ff, 0xfb76ff, 0xffb8fd, 0xfff1b8, 0xffe67b, 0xffd527, 0xe8bb00, 0xc9a200, 0xe8bb00, 0xffd527, 0xffe67b, 0xffd2d2, 0xff9999, 0xff5a5a, 0xeb3323, 0xff5a5a, 0xff9999, 0xffd2d2, 0xffe3f7, 0xe6d2ff, 0x9fbaff, 0x6695ff, 0x2e79ff, 0x005fea, 0x004bb7, 0x005fea, 0x2e79ff, 0x6695ff, 0x9fbaff, 0xc2d1ff]
    case 43:  // black and white stripes
        return [0x3a3a3a, 0xf4f4f4]
    case 44:
         return [0xffa1ff, 0x76aeff, 0xffb9ab, 0xd69cff, 0x048e00, 0xb56700, 0x7226bc, 0x999500, 0xa6ffa4, 0xffc878, 0xe0b8ff, 0xffff9f, 0x671fb2, 0xcd00d8, 0xb56700, 0x0050a0, 0xffa1ff, 0xa6ffa4, 0x76aeff, 0xffb9ab, 0xcd00d8, 0x0050a0, 0xbf4008, 0x671fb2, 0xffff9f, 0xe0b8ff, 0xffc878, 0xffa1ff, 0x048e00, 0xbf4008, 0x999500, 0x7226bc];
   case 45:  // strobe only
        return [0xb60dfc, 0x64ff88, 0xff0068, 0xe8bbff, 0x354ddb, 0xffff64, 0xff6008, 0x20dbef, 0x6e0899, 0xffb600, 0xc84afd, 0x4bbf66, 0xff408e, 0xae8cbf, 0x687ae4, 0xbfbf4b, 0xff8846, 0x18a4b3, 0x9246b3, 0xbf8900, 0xdb86fe, 0x328044, 0xff80b3, 0x745e80, 0x9aa6ed, 0x808032, 0xffb084, 0x106e78, 0xb784cc, 0x805b00, 0xedc3fe, 0x194022, 0xffbfd9, 0x3a2f40, 0xcdd3f6, 0x404019, 0xffd7c1, 0x08373c, 0xdbc1e6, 0x402e00, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xffffff, 0x000000, 0xedc3fe, 0x194022, 0xffbfd9, 0x3a2f40, 0xcdd3f6, 0x404019, 0xffd7c1, 0x08373c, 0xdbc1e6, 0x402e00, 0xdb86fe, 0x328044, 0xff80b3, 0x745e80, 0x9aa6ed, 0x808032, 0xffb084, 0x106e78, 0xb784cc, 0x805b00, 0xc84afd, 0x4bbf66, 0xff408e, 0xae8cbf, 0x687ae4, 0xbfbf4b, 0xff8846, 0x18a4b3, 0x9246b3, 0xbf8900]
     
    }
}









// Pieters Random class - with simple interface for simple people . Uses R, S, s, t
//
let R, S, s, t;
S=Uint32Array.from([0,1,s=t=2,3].map(i=>parseInt(tokenData.hash.substr(i*8+2,8),16)));R=_=>(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=s=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(s>>>19),S[0]/2**32);'tx piter'

// returns 0-1
function rnd() {
  return R();
}
// returns a - b as an int exclusive of b
function rnd_i(a, b) {
  R()
  return (S[0]%(b-a)) + a
}
// returns a - b as a float exclusive of b
function rnd_f(a, b) {
  return R()*(b-a)+a
}






//
// THREE JS Setup
//


//
//
//
// Renderer
//
//
// This function works out the dimensions the window should be. I have it set up for 1:1.
function getDim() {
let dimW = window.innerWidth;
let dimH = window.innerHeight;

if(dimH < dimW) {
  dimW = dimH
}
return dimW;
}

//const canvas = document.querySelector('canvas.webgl')

//const rndr = new THREE.WebGLRenderer({antialias: true}); // use this if NOT capturing screenshots
const rndr = new THREE.WebGLRenderer({antialias: true,  preserveDrawingBuffer: true }); // use this to capture screenshots

rndr.setPixelRatio(window.devicePixelRatio); 
document.body.appendChild(rndr.domElement);
rndr.domElement.style.touchAction = 'none';
// set the initial dimensions
var w = getDim();
rndr.setSize(w , w);
rndr.shadowMap.enabled = true;
rndr.shadowMap.type = THREE.PCFShadowMap;
//
// sets up an event listener so the window gets resized appropriatly
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
  let dim = getDim();
  rndr.setSize(dim, dim);
}


//
//
// Scene
const scene = new THREE.Scene()
//
//
// Camera
const cam = new THREE.PerspectiveCamera(3.8, 1, 15, 25)   
//cam.position.set(0, 0, 20)  
cam.position.set(0, 0, 19.25)  
cam.setRotationFromEuler(new THREE.Euler(0, 0, 0, "ZYX"))
scene.add(cam)





//
// ORBIT CAM
//
var cam_grp = new THREE.Group();
scene.add(cam_grp);
cam_grp.add(cam);

let but = false;
let click = false;
let prevX = 0;
let prevY = 0;
let nTou = true;
let accumx = 0;
let accumy = 0;
// now a bunch of event listeners that get called on various touch events.
rndr.domElement.addEventListener('pointermove', mMove)
function mMove(e) {

  if(!but) {return}
  let movx = e.pageX - prevX;
  let movy = e.pageY - prevY;
  if(nTou) { movx = 0; movy = 0;  nTou = false; }
  accumx += movx * 0.25;
  accumy += movy * 0.25;
  prevX = e.pageX;
  prevY = e.pageY;
}

rndr.domElement.addEventListener('pointerdown', pD)
rndr.domElement.addEventListener('pointerup', pU)
rndr.domElement.addEventListener('pointerleave', pL)
//window.addEventListener( 'pointerup', pU);
function pD(e) {
but = true;
nTou = true;
click = true;
}
function pU(e) {
but = false;
nTou = true;
click = false;
}
function pL(e)
{
but = false;
nTou = true;
click = false;
}




//
// LIGHTS
//
function AddLight(p, b) {
  let liD = new THREE.DirectionalLight(0xffffff, b, 1000);    
  liD.position.set(p.x,p.y,p.z);   
  liD.castShadow = true;
  liD.shadow.mapSize.width = 4096
  liD.shadow.mapSize.height = 4096
  
  liD.shadow.camera.near = 0.1;
  liD.shadow.camera.far = 50;
  
  liD.shadow.camera.left = -1.5; 
  liD.shadow.camera.right = 1.5; 
  liD.shadow.camera.top = 1.5;
  liD.shadow.camera.bottom = -1.5; 
  
  liD.shadow.bias = -0.0001;
  liD.shadow.radius = 5;
  
  scene.add(liD) 
}

const liA = new THREE.AmbientLight(0xffffff, 0.3)   //0.64
scene.add(liA)
AddLight(new THREE.Vector3(0,0.33,1), 0.5)
AddLight(new THREE.Vector3(0,0.9,1),0.1)













//
// FUNCTIONS
//
function lerp(v0, v1, u) {
  return v0 + (v1-v0) * u
}

function polarToCart(r, a) {
  return new THREE.Vector2(r * Math.cos(a), r * Math.sin(a))
}

function rotateLayers() {

  let pp = new THREE.Vector2(0,0)
  let pr = F.max_r

  for(let i=0; i<F.num_layers; i++) {
  
    // set up the layer data
    let u = i/(F.num_layers-1)
    let r = Math.pow(Math.abs(1-u),F.radius_pow) * (F.max_r-F.min_r) + F.min_r
    
    // calculate the position of the layer
    let a = F.twist
  
    // alter the u of twist... cant do complete rotations if I use this..
    if(F.twist_by_u > 0) {
      let tu = u
      if(F.twist_by_u == 1) tu = Math.abs(1-u)
      a = Math.pow(tu,F.twist_pow) * F.twist
    }
  
    //Math.pow(Math.abs(1-u),F.radius_pow) * (F.max_r-F.min_r) + F.min_r
  
    let p = polarToCart((pr - r) * F.overlap, a*u).add(pp)
  
    layers[i].position.set(p.x,p.y,Math.pow(u, F.depth_pow) * (F.depth * -1))
  
    let q = new THREE.Quaternion()
    q.setFromAxisAngle(new THREE.Vector3(0,0,1), F.geo_twist * Math.pow(u, F.geo_twist_pow))
    layers[i].rotation.setFromQuaternion(q)
  
    pr = r
    pp = p
  }
}
// color cycle
function CC(a,b,u,i) { 
  let c = new THREE.Color().setHex(P[a]);
  c.lerp(new THREE.Color().setHex(P[b]), u);
  mats[i].color.set(c);
}

function mod(x, y){
  return ((x % y) + y) % y;
}

function cartToPolar(p) {
  return new THREE.Vector2(Math.sqrt(p.x * p.x + p.y * p.y), Math.atan2(p.y, p.x));
}

function rounded_sin(x,y){
  return Math.pow(Math.abs(Math.sin(x)),y) * Math.sign(Math.sin(x));
}

function clamp(a, min, max){
  return Math.max(Math.min(a, max), min);
}
function fitrange(value, min1, max1, min2, max2){
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1); 
}

function prob_select(values, weights){
  //weights sum to 1
  //select value based on probability
  var sum = weights.reduce((a,b) => a + b, 0);
  weights = weights.map(x => x / sum);
  var n = rnd_f(0,1);
  var ws = 0.0;
  for(var i = 0; i < weights.length; i++){
    ws += weights[i];
    if(n <= ws){
      return values[i]
    }
  }
}

function smoothstep(h,l,x){
  var t = clamp((x - h) / (l - h), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}





//
// SET
//
class Set {
  constructor(num_layers, depth, depth_pow, min_r, max_r, radius_pow, overlap, twist, twist_by_u, twist_pow, geo_twist, geo_twist_pow, rot_add, use_shader, shader_type) {
    this.num_layers = num_layers;
    this.depth = depth;
    this.depth_pow = depth_pow;
    this.min_r = min_r;
    this.max_r = max_r;
    this.radius_pow = radius_pow;
    this.overlap = overlap;
    this.twist = twist;
    this.twist_by_u = twist_by_u;
    this.twist_pow = twist_pow;
    this.geo_twist = geo_twist;
    this.geo_twist_pow = geo_twist_pow;
    this.rot_add = rot_add;
    this.use_shader = use_shader;
    this.shader_type = shader_type;

    this.designs = [];
  }
  AD(design) {
    this.designs.push(design);
  }
}


function GetSet(id) {

  let f
  let d0, d1, d2, d3, d4
  let a,b,c,d

  switch(id) {
    case 0:  // twisted circle to sin

      b = rnd_f(11,24)  // twist
      c = 0;            // twist_by_u
      d = rnd_f(0.25, 1.0) // overlap

      if(R()>0.5) {
        // switch into twist by u mode
        b+=42
        c=2
        d = rnd(0.1, 0.6)
      }  

      f = new Set(
        rnd_i(32,100),        // num_layers 
        
        1,                      // depth
        1.5,       // depth pow

        0.005, 1,             // min/max radius
        rnd_f(0.95,4),      //pow radius rnd_f(0.95,4)
 
        d,        // overlap  rnd_f(0.25, 1.0)
        b,        // twist   rnd_f(11,24)

        c,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
        1.5,      // twist_pow - // pow to twist by

        0,      // geo_twist - amount to twist the geo itself
        1,      // geo_twist_pow - pow the geo twist

        0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

        0.2,     //use shader (0-1 chance)
        1       //shader type
        );

      a = 0;
      if(R()>0.5) {
        a = rnd_f(0.25,0.75)
        d0 = new Design_Sin(0)
        d0.Setup(rnd_i(9,24), rnd_f(0.1,0.5), rnd_f(0.5,5))
        f.AD(d0);
      }

      d1 = new Design_Sin(a)
      d2 = new Design_Circle(1.0)
      d1.Setup(rnd_i(5,42), rnd_f(0.05,0.5), 1)

      f.AD(d1);
      f.AD(d2);

      return f;
  case 1:   // very simple circle to saw
      f = new Set(
        rnd_i(24,86),        // num_layers 
        
        1,                      // depth
        1.5,                      // depth pow

        0.005, 1.0,             // min/max radius
        rnd_f(2,8),        //pow radius 

        0.0,                    // overlap
        0.0,                    // twist

        0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
        1,      // twist_pow - // pow to twist by

        rnd_f(0, 4),      // geo_twist - amount to twist the geo itself
        1,      // geo_twist_pow - pow the geo twist

        0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

        0,     //use shader (0-1 chance)
        0       //shader type
        );


      a = 0;
      if(R()>0.6) {
        a = 0.25
        if(R()>0.4) {
          d0 = new Design_Sin(0)
          d0.Setup(rnd_i(9,24), 0.06, 1)
        }
        else {
          d0 = new Design_Drips(0)
          d0.Setup(rnd_i(8,16), 0.4)
        }
        f.AD(d0);
      }
      if(R() > 0.5) d1 = new Design_Sin(a)
      else d1 = new Design_Saw(a)
      d2 = new Design_Circle(1.0)
      d1.Setup(rnd_i(8,42), rnd_f(0.1, 0.5), 1)

      f.AD(d1);
      f.AD(d2);

      return f;

      
  case 2:   // animated simple target shape
      f = new Set(
        rnd_i(24,48),        // num_layers 
        
        1,                      // depth
        2,                      // depth pow

        0.01, 1,             // min/max radius
        rnd_f(0.7,3),                      //pow radius

        0.35,                    // overlap
        rnd_f(0,100),                    // twist

        0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
        1,      // twist_pow - // pow to twist by

        0,      // geo_twist - amount to twist the geo itself
        1,      // geo_twist_pow - pow the geo twist

        0.25,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

        0.2,     //use shader (0-1 chance)
        0       //shader type
        );

      d0 = new Design_Circle(0.0)
      d1 = new Design_Circle(1.0)

      f.AD(d0);
      f.AD(d1);

      return f;
  case 3:   // Drip spiral
    f = new Set(
      rnd_i(32,100),        // num_layers 
      
      1,                      // depth
      rnd_f(0.5,2),       // depth pow

      0.005, 1.0,             // min/max radius
      rnd_f(0.75,4),      //pow radius

      rnd_f(0.25, 1.0),   // overlap
      rnd_f(6,24),        // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      5,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0.2,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Drips(0.0)
    d1 = new Design_Circle(1.0)

    f.AD(d0);
    f.AD(d1);

    d0.Setup(rnd_i(5,20), rnd_f(0.25,0.5))
    return f;    
case 4:   // Combine Op spiral
    f = new Set(
        rnd_i(48,100),        // num_layers 
        
        1,                      // depth
        rnd_f(0.5,2),       // depth pow

        0.005, 1.0,             // min/max radius
        rnd_f(0.75,4),      //pow radius

        rnd_f(0.25, 1.0),   // overlap
        rnd_f(6,24),        // twist

        0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
        5,      // twist_pow - // pow to twist by

        0,      // geo_twist - amount to twist the geo itself
        1,      // geo_twist_pow - pow the geo twist

        0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

        0.2,     //use shader (0-1 chance)
        1       //shader type

        );

      d0 = new Design_Combine_Op(0.0)
      d3 = new Design_Circle(1.0)
      d1 = new Design_Saw(0.0)
      d2 = new Design_Sin(0.0)

      a = rnd_i(2,8);     // rnd_i(2,20);
      b = rnd_f(0.25,0.5);
      d1.Setup(a, b, 1.0);
      d2.Setup(a * 2, b, 1); //saw 
      
      d0.Setup(d1, d2, (x,y) => {return lerp(x,  y, .5)}) 
      
      f.AD(d0);
      f.AD(d3);

      return f; 
  case 5:   // Overlapping Sin Frequencies

    a = rnd_i(32,64)
    f = new Set(
      a,        // num_layers 
      
      fitrange(a, 32, 64, 0.2, 1),                      // depth
      1.5,                      // depth pow

      0.001, 1.0,             // min/max radius
      1.5,                   //pow radius

      rnd_f(-0.1,0.1),                    // overlap
      0,                    // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      1,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0;

      0,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_StretchedSin(0.0)
    d1 = new Design_Sin(0.75)
    d2 = new Design_Circle(rnd_f(d1.p + 0.05, 0.98))
    d3 = new Design_Circle(1.0)
    //d0.Setup(rnd_i(8,64), rnd_f(0.15, 0.35), 1)
      d0.Setup(rnd_f(1.5, 3), 2*Math.PI*rnd_i(12,64), rnd_f(0.1, 0.25))

    d1.Setup(rnd_i(8,64), rnd_f(0.01, 0.25), 1)

    f.AD(d0);
    f.AD(d1);
    f.AD(d2);
    f.AD(d3);
    
    return f;
  case 6:   // Twist in
    f = new Set(
      rnd_i(64,100),        // num_layers  
      
      1,                      // depth
      0.75,                      // depth pow

      0.001, 1.0,             // min/max radius
      rnd_f(1,2),                   //pow radius

      0,                    // overlap
      0.0,                    // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      1,      // twist_pow - // pow to twist by

      rnd_f(-5,5),      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0.2,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Sin(0.0)
    d1 = new Design_Sin(0.25)
    d2 = new Design_Sin(0.4)
    d3 = new Design_Circle(0.6)
    d4 = new Design_Circle(1.0)

    a = rnd_f(0.1,6);
    d0.Setup(53, rnd_f(0.01, 0.1), a)
    d1.Setup(rnd_i(4,16), rnd_f(0.01, 0.25), a)
    d2.Setup(d1.freq, rnd_f(0.01, 0.25), a)

    f.AD(d0);
    f.AD(d1);
    f.AD(d2);
    f.AD(d3);
    f.AD(d4);

    return f;
  case 7:   // Facetted Shape - 4-6
    f = new Set(
      rnd_i(42,100),        // num_layers 
      
      1,                      // depth
      1,                      // depth pow

      0.001, 1.5,             // min/max radius
      rnd_f(0.75,3),                   //pow radius

      rnd_f(-0.15, 0.15),                    // overlap
      0,                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      0.1,      // twist_pow - // pow to twist by

      rnd_f(-10,10),      // geo_twist - amount to twist the geo itself
      4,      // geo_twist_pow - pow the geo twist

      rnd_f(0.01,0.06),       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type

      );

    d0 = new Design_Facet(0.0)
    d1 = new Design_Facet(1.0)

    a = 0;
    if(R()>0.5) a = 1;
    b = rnd_f(0.01, 0.5)
    c = rnd_i(4,6)
    d0.Setup(c, b, a)
    d1.Setup(c, b, a)


    f.AD(d0);
    f.AD(d1);


    return f;
  case 8:   // Facetted Shape - 4-6 tight!!
    f = new Set(
      64,        // num_layers 
      
      1,                      // depth
      1.5,                      // depth pow

      0.001, 1.5,             // min/max radius
      rnd_i(4,12),                   //pow radius

      rnd_f(-0.15, 0.01),                    // overlap
      0,                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      0.1,      // twist_pow - // pow to twist by

      rnd_f(-10,10),      // geo_twist - amount to twist the geo itself
      4,      // geo_twist_pow - pow the geo twist

      0.06,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Facet(0.0)
    d1 = new Design_Facet(1.0)

    a = 0;
    if(R()>0.5) a = 1;
    b = rnd_f(0.01, 0.5)
    c = rnd_i(4,6)
    d0.Setup(c, b, a)
    d1.Setup(c, b, a)


    f.AD(d0);
    f.AD(d1);

    return f;

  case 9: // drips
    c = rnd_i(15,82)
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      1.5,             // depth pow

      0.001, 0.825,             // min/max radius
      rnd_f(1,3),                   //pow radius

      rnd_f(-0.35,0.35),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0.2,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Circle(1.0)
    d1 = new Design_Saw(0.7);
    d2 = new Design_Sin(0.4);
    d3 = new Design_Drips(rnd_f(.1,.3));
    d4 = new Design_Drips(0.0);
    a = rnd_i(6, 10);
    b = rnd_f(.3, .5);
    c = rnd_f(.1, .3);
    d4.Setup(a, b, 1);
    d3.Setup(a, b, 1);
    d2.Setup(Math.floor(a / 2) * 2.0 * 5, c, 1);
    d1.Setup(Math.floor(a / 2) * 2.0 * 5, c, 1);
    f.AD(d4);
    f.AD(d3);
    f.AD(d2);
    f.AD(d1);
    f.AD(d0);
    return f;  

  case 10:   // many circles
    f = new Set(
      rnd_i(42,242),        // num_layers 
      
      1,                      // depth
      1,                      // depth pow

      0.001, 1.5,             // min/max radius
      rnd_f(3,8),                   //pow radius

      rnd_f(0.15, 0.6),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0.1,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Circle(0.0)
    d1 = new Design_Circle(1.0)

    f.AD(d0);
    f.AD(d1);
    return f;
  case 11:   // maw
    c = rnd_i(24,64)
    f = new Set(
      c,        // num_layers 
      
      fitrange(c,24,64,0.3,1),                      // depth
      rnd_f(1,1.5),             // depth pow

      0.001, rnd_f(1,1.5),             // min/max radius
      rnd_f(1,3),                   //pow radius

      rnd_f(-0.35,0.35),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Circle(0.0)
    d1 = new Design_Sin(0.25)
    if(R()>0.5) {d2 = new Design_Sin(rnd_f(0.5,0.68))} else {d2 = new Design_Saw(rnd_f(0.5,0.69))}
    if(R()>0.5) {d3 = new Design_Sin(0.7)} else {d3 = new Design_Saw(0.7)}
    d4 = new Design_Circle(1.0)

    a = rnd_i(4,18);
    b = rnd_f(0.25,0.75)
    d1.Setup(a, 0.05, 1)
    d2.Setup(a*2, b, 1)
    d3.Setup(a*2, b, 1)

    f.AD(d0);
    f.AD(d1);
    f.AD(d2);
    f.AD(d3);
    f.AD(d4);
    return f;
  case 12:   // super f
    c = rnd_i(32,128)
    f = new Set(
      c,        // num_layers 
      
      fitrange(c,16,64,0.3,1),                      // depth
      1.5,             // depth pow

      0.001, 1.5,             // min/max radius
      rnd_f(1,4),                   //pow radius

      rnd_f(-0.35,0.35),                // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type
      );

     
    if(R()>0.5) {
      d0 = new Design_Sin(0)
      d1 = new Design_SuperFormula(0.5)
      d2 = new Design_SuperFormula(1.0)

      d0.Setup(rnd_i(8,32), rnd_f(0.1,0.5), rnd_f(0.42, 2))
      a = rnd_i(5, 12)
      d1.Setup(a,2,8,4)
      d2.Setup(a,2,8,4)

      f.AD(d0);
      f.AD(d1);
      f.AD(d2);
    }
    else {
      d0 = new Design_SuperFormula(0)
      d1 = new Design_SuperFormula(1.0)
  
      a = rnd_i(2,8)
      b = rnd_i(4,16)
      c = rnd_i(4,16)
      d0.Setup(b,rnd_i(3,24),8,a)
      d1.Setup(c,2,8,a)
  
      f.AD(d0);
      f.AD(d1);
    }
    return f;
  case 13:   // super f
    c = rnd_i(64,142)
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      1,             // depth pow

      0.005, rnd_f(1,1.5),             // min/max radius
      rnd_f(1,6),             //pow radius

      rnd_f(-0.35,0.35),            // overlap
      rnd_f(41,242),          // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      rnd_f(-2,2),      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0.2,     //use shader (0-1 chance)
      1       //shader type

      );

     
      d0 = new Design_Sin(0)
      d1 = new Design_SuperFormula(0.5)
      d2 = new Design_SuperFormula(1.0)
  
      a = rnd_i(3,18)
      b = a*rnd_i(1,3)*4
      d0.Setup(b, rnd_f(0.1,0.4), 1)
      d1.Setup(a,2,7,7)
      d2.Setup(a,3,rnd_i(3,9),8)
      
      f.AD(d0);
      f.AD(d1);
      f.AD(d2);

    return f;

  case 14:   // facet to sin twisted
    
 
    f = new Set(
      rnd_i(32,142),        // num_layers 
      
      1,                      // depth
      1,             // depth pow

      0.005, 1,             // min/max radius
      1,             //pow radius

      rnd_f(0.5,1),            // overlap
      rnd_i(8,16),          // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      1,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0.2,     //use shader (0-1 chance)
      1       //shader type
      );

     
      d0 = new Design_Sin(0)
      d1 = new Design_Facet(rnd_f(0.75,0.8))
      d2 = new Design_Facet(1.0)
  
      a = rnd_i(4,7)
      b = rnd_i(3,13)
      
      d0.Setup(a*b, 0.2, 1)
      //d0.Setup(4, 1.75, 1 )
      d1.Setup(a,0.1,1);
      d2.Setup(a,0.1,1);
      f.AD(d0);
      f.AD(d1);
      f.AD(d2);

    return f;
  case 15: // stretched
    c = rnd_i(32,128)
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      rnd_f(1,2),             // depth pow

      0.001, 1.25,             // min/max radius
      rnd_f(1,3),                   //pow radius

      rnd_f(-0.35,0.35),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0.1,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Circle(1.0)
    d1 = new Design_Circle(0.8)
    d2 = new Design_StretchedSin(0.4);
    d3 = new Design_StretchedSin(0.1);


    d2.Setup(2.5, .25, .05);
    d3.Setup(2.0, 150, .25);
    
    f.AD(d3);
    f.AD(d2);
    f.AD(d1);
    f.AD(d0);
    return f;
  case 16: // stretched circle
    c = rnd_i(32,64)
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      1.5,             // depth pow

      0.01, 1,             // min/max radius
      2,                   //pow radius

      0,                    // overlap
      0,                    // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      rnd_f(-3,3),      // geo_twist - amount to twist the geo itself
      rnd_f(-0.2,4),      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0.2,     //use shader (0-1 chance)
      1       //shader type
      );

      a = rnd_f(1.5, 3)
      b = rnd_i(16,64)
      c = rnd_i(8,32)

    d0 = new Design_Drips(0)
    d1 = new Design_StretchedSin(0.5);
    d2 = new Design_StretchedSin(1);


    d0.Setup(c, 0.5)
    d1.Setup(a, Math.PI*2*b, rnd_f(0,0.3));
    d2.Setup(a, Math.PI*2*b, 0);
    
    f.AD(d0);
    f.AD(d1);
    f.AD(d2);

    return f;
 
  case 17: // drips
    c = rnd_i(15,40) //rnd_i(32,64)
    f = new Set(
      c,        // num_layers 
      
      fitrange(c, 14, 40, 0.2, 1),                      // depth
      1.5,             // depth pow

      0.001, 1.0,             // min/max radius
      rnd_f(1,3),                   //pow radius

      rnd_f(-0.35,0.35),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Circle(1.0)
    if(rnd_i(0,2)){
    d2 = new Design_Sin(0.5);
    }
    else{
      d2 = new Design_Saw(0.5);
    }
    d3 = new Design_Drips(0.4);
    d4 = new Design_Drips(0.0);
    a = rnd_i(4, 10);
    b = rnd_f(.3, .5);
    c = rnd_f(.1, .3);
    d4.Setup(a, b + rnd_f(0, .1), 1);
    d3.Setup(a, b, 1);
    d2.Setup(Math.floor(a / 2) * 2.0 * 5, c, 1);
    f.AD(d4);
    f.AD(d3);
    f.AD(d2);
    f.AD(d0);
    return f;  
    

  case 18:   // Facetted Shape - 3-6 tight!!
    f = new Set(
      rnd_i(42,100),        // num_layers 
      
      1,                      // depth
      1.5,                      // depth pow

      0.001, 1,             // min/max radius
      1,                   //pow radius

      rnd_f(-0.1, 0.1),                    // overlap
      0,                    // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      1,      // twist_pow - // pow to twist by

      8,      // geo_twist - amount to twist the geo itself
      8,      // geo_twist_pow - pow the geo twist

      0.03,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0

      0,     //use shader (0-1 chance)
      1       //shader type
      );


    d0 = new Design_Sin(0)
    d1 = new Design_Sin(rnd_f(0.5, 0.7))
    d2 = new Design_Facet(rnd_f(0.75, 0.98))
    d3 = new Design_Facet(1.0)

    b = rnd_f(0.01, 0.5)
    c = rnd_i(3,6)
    d = rnd_i(1,4)

    let e = fitrange(c*d*2, 2*1*2, 5*3*2, 0.75, 0.25)

    d0.Setup(rnd_i(c,c*d*7), e, 1)
    d1.Setup(c*d*2, rnd_f(0.15, 0.25), 1)
    
    d2.Setup(c, b, 1)
    d3.Setup(c, b, 1)

    f.AD(d0);
    f.AD(d1);
    f.AD(d2);
    f.AD(d3);
    return f;
  case 19: // pure saw
    c = rnd_i(15,82)
    f = new Set(
      c,        // num_layers 
      
      fitrange(c, 15, 82, 0.2, 1),                      // depth
      1.5,             // depth pow

      0.001, 1,             // min/max radius
      2,                   //pow radius

      rnd_f(-0.35,0.35),                    // overlap
      rnd_f(41,242),                    // twist

      1,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      2,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0.01,     //use shader (0-1 chance)
      1       //shader type
      );

    d0 = new Design_Saw(0);
    d1 = new Design_Saw(1);

    b = rnd_i(8,32)
    d0.Setup(b, rnd_f(0.1, 0.5), 1)
    d1.Setup(b, rnd_f(0.1, 0.5), 1)

    f.AD(d0);
    f.AD(d1);
    return f;  
  case 20: // max twist
    c = rnd_i(32,82)
    d = rnd_f(8,42);
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      1.5,             // depth pow

      0.001, 1,             // min/max radius
      2,                   //pow radius

      0.5,                    // overlap
      d,                    // twist

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u
      0,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0,     //use shader (0-1 chance)
      1       //shader type
      );

    if(R()>0.5) { d0 = new Design_Sin(0) } else { d0 = new Design_Saw(0) }
    if(R()>0.5) { d1 = new Design_Sin(1) } else { d1 = new Design_Saw(1) }

    b = Math.floor(fitrange(Math.pow(R(), 1.5),0,1,12,128))    
    a = fitrange(Math.pow(R(), 6),0,1,0.25,12)
    d0.Setup(b, 0.15, a)
    d1.Setup(b, 0.15, a)

    f.AD(d0);
    f.AD(d1);
    return f;  
  case 21: // animated set
    c = rnd_i(32,128)
    f = new Set(
      c,        // num_layers 
      
      1,                      // depth
      1.5,             // depth pow

      0.001, 1,             // min/max radius
      2,                   //pow radius

      1,                    // overlap
      12,                    // twist rnd_f(8,42)

      0,      // twist by u - // 0 = do not twist by u // 1 = twist start by u // 2 = twist end by u // 2
      1,      // twist_pow - // pow to twist by

      0,      // geo_twist - amount to twist the geo itself
      1,      // geo_twist_pow - pow the geo twist //1.25

      0,       // rot add -  each frame the anim twists for this amount. Usually this is gonna be 0
      
      0,     //use shader (0-1 chance)
      1       //shader type
      );

    if(R()>0.5) { d0 = new Design_Sin(0) } else { d0 = new Design_Saw(0) }
    if(R()>0.5) { d1 = new Design_Sin(1) } else { d1 = new Design_Saw(1) }

    b = Math.floor(fitrange(Math.pow(R(), 1.5),0,1,24,96))
    a = rnd_f(0.01, 0.2)
    d0.Setup(b, a, 1)
    d1.Setup(b, a, 1)

    f.AD(d0);
    f.AD(d1);
    return f;  
  }
}











//
// DESIGNS
//
class Design {
  constructor(p) {
    this.p = p;
  }
  Setup() {}
  Get(r, u) {}
}

class Design_Circle extends Design {
  Get(r, u) {
    return polarToCart(r, 2*Math.PI*u);
  }
}

class Design_Sin extends Design {
  Setup(freq, amp, pow) {
    this.freq = freq;
    this.amp = amp;
    this.pow = pow;
  }
  Get(r, u) {
    return polarToCart((Math.pow((Math.sin((u+(0.25/this.freq))*Math.PI*2*this.freq)+1)*0.5,this.pow)*this.amp*r)+r,2*Math.PI*u)
  }
}

class Design_Saw extends Design {
  Setup(freq, amp, pow) {
    this.freq = freq;
    this.amp = amp;
    this.pow = pow;
  }
  Get(r, u) {
    let p = 1.0/this.freq;
    return polarToCart((4/p*Math.abs(((((u+(0.25/this.freq))%1-p/4)%p)+p)%p-p/2)*0.5*this.amp*r)+r,2*Math.PI*u)
  }
}

class Design_Facet extends Design {
  Setup(freq, r_unbevelled, type) {
    this.freq = freq;
    this.r_unbevelled = r_unbevelled;
    this.type = type;
  }
  Get(r, u) {
    let step = Math.PI*2/this.freq;

    let side = Math.floor(u * this.freq);
    let ua   = (u * this.freq)%1;

    let p0 = polarToCart(r,step*side);
    let p1 = polarToCart(r,step*(side+1));


    let x = lerp(p0.x, p1.x, ua);
    let y = lerp(p0.y, p1.y, ua);
    let p = new THREE.Vector2(x, y);

    //
    // this section uses r_unbevelled to make rounded corners the further you are away from that.
    if(this.type == 1) {
    if(r > this.r_unbevelled) 
    {
        // find distance between line and me
        
        // line_for_unbevelled
        let p0u = polarToCart(this.r_unbevelled,step*side)
        let p1u = polarToCart(this.r_unbevelled,step*(side+1))
        
        let p0toP =  p.clone().sub(p0u);
        let line  =  p1u.clone().sub(p0u)
        let lineLength = line.lengthSq();
        let dotp = p0toP.dot(line); 
        let dist = dotp / lineLength;   // the normalized distance from a to the closest point on line
        
        let p0p1_half = p1.clone().sub(p0).multiplyScalar(0.5).add(p0); 
        let p0up1u_half = p1u.clone().sub(p0u).multiplyScalar(0.5).add(p0u); 
        let r_diff = p0p1_half.distanceTo(p0up1u_half);

        if(dist< 0) {   // closest point is p0 
            // point for p0u to p
            let pointat = p.clone().sub(p0u).normalize();
            p = pointat.clone().multiplyScalar(r_diff).add(p0u);
        }
        else if(dist >1) {   // clest point is p1 
            // point for p1u to p
            let pointat = p.clone().sub(p1u).normalize();
            p = pointat.clone().multiplyScalar(r_diff).add(p1u);
        }
      }
    }

    // set the position
    return p;
  }
}

class Design_SuperFormula extends Design {
  Setup(m, n1, n2, n3) {
    this.m = m;             // acts like frequency
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
  }
  Get(r, u) {
    let a = 2*Math.PI*u;
    let p3 = Math.pow(Math.pow(Math.abs(Math.cos(a*this.m/4)), this.n2)+Math.pow(Math.abs(Math.sin(a*this.m/4)), this.n3), 1/this.n1);
    let sr = 0;
    if(p3!=0) { sr = 1/p3; }
    return polarToCart(sr*r, a);
  }
}

class Design_Combine_Op extends Design {
  Setup(design_a, design_b, operation) {
    this.design_a = design_a;
    this.design_b = design_b;
    this.operation = operation;
  }
  Get(r, u) {
    var vals_a = (this.design_a.Get(r, u));
    var vals_b = (this.design_b.Get(r, u));
    var x = this.operation(vals_a.x, vals_b.x);
    var y = this.operation(vals_a.y, vals_b.y);
    return new THREE.Vector2(x, y);
  }
}



class Design_Drips extends Design {
  Setup(freq, amp, sin_fix) {
    if(sin_fix){
    this.freq = Math.floor(freq / 2) * 2.0;
    }else{
      this.freq = freq;
    }
    this.amp = amp;
    this.sin_fix = sin_fix;
  }
  Get(r, u) {
    let a = 2*Math.PI*u;
    let c = u;
    if(this.sin_fix){
      c += .25 / this.freq;
    } 
    c *= 2*Math.PI * this.freq;
    let sin_a = rounded_sin(c * 5, .5) + rounded_sin(c * 1.5, .8) * 1.0 + rounded_sin(c * 5, .5) * .2;
    sin_a = fitrange(sin_a, -2, 2, 0, 1);
    sin_a *= this.amp;
    sin_a *= r;
    sin_a += r;
    let out = polarToCart(sin_a, a);
    return out;
  }
}


class Design_StretchedSin extends Design {
  Setup(stretch_amt, freq, amp) {
      this.stretch_amt = stretch_amt;
      this.freq = freq;
      this.amp = amp;
    }  
    
    Get(r, u) {
      let a = 2*Math.PI*u;

      //dx
      let h = .01;
      //lmao do finite differences in polar coordinate space
      let b = polarToCart(r, mod(a - h, Math.PI * 2));
      let c = polarToCart(r, mod(a + h, Math.PI * 2));
      b.x *= this.stretch_amt;
      c.x *= this.stretch_amt;
      //get the gradient b - c / dx (this is the tangent to the stretched circle)
      let d = new THREE.Vector2(b.x - c.x, b.y - c.y);
      d.normalize();

      //rotate the gradient by 90 degrees to get a correct normal
      let d_temp = d.clone();
      d.x = d.y;
      d.y = -d_temp.x;

      //input circle
      let t = polarToCart(r, a);
      t.x *= this.stretch_amt;

      t.add(d.multiplyScalar(fitrange(Math.sin(u * this.freq), -1, 1, 0,1) * this.amp * r) );
      return t; 
    }
}









//
//
//
//
//
//
// FEATURES AND DATA
//

//
// SET SELECTION
//

let Set_id;
let F;
let P_type;
let P_id;
let P_speed = 0;     // for 0 P_type this is the time between bands // for 1 P_type this is the time for a full 0-1 loop
let P_pow = 1;       // for 0 P_type this is the pow for interpolating each color // for 1 P_type, this pows the 0-1 u curve
let P_stretch = 1;   // stretches u across the layers, so for types 1 and 2, higher numbers means the color wraps more.
let pal_index = 0;      // increase to loop the palette, but always modulo it by palette.length - DON NOT CHANGE USED IN ANIMATE LOOP
let cycle_time = 0.0;   // counter to know when to change palette - DON NOT CHANGE USED IN ANIMATE LOOP
let P;

let rot_speed;   // speed all the geo rotates one full turn in seconds
let rot_start;
let rot_sign;
let shading;
let tunnel_light;

let headless = navigator.plugins.length === 0;
let mats = [];


function CreateSet() {

  Set_id = prob_select([...Array(22).keys()], [9,        // Offset Abyss
                                                    5,        // Pinched Micro
                                                    4,        // Circular Unstable
                                                    10,       // Drippy Whirl
                                                    10,       // Lo-Freq Descent
                                                    4,        // Oval Edge
                                                    8,        // Exponential Depth
                                                    9,        // Radiating Facets
                                                    2,        // Facet Micro
                                                    8,        // Sunken Drips     
                                                    4,        // Circular Vortex
                                                    10,       // Complex Interior
                                                    9,        // Super Micro
                                                    9,        // Super Macro
                                                    6,        // Facetted Twist
                                                    4,        // Sunken Elipse
                                                    4,        // Twisted Elipse
                                                    6,        // Shallow Splatter   
                                                    8,        // Center Facet
                                                    7,        // Sawtooth            
                                                    10,       // Sharp Whirl
                                                    8]);      // Wandering Center

  //
  // CREATE SET
  //
  F = GetSet(Set_id);

  //
  // PALETTE SELECTION
  //
  P_type = prob_select([0,1,2,3], [10, 3.5, 5 , 1.5]);        // 0 = interpolation(P_pow = 0 for bands) // 1 = pulse // 2 = no color cycling // 3 = full fade

  // change P_id based on P_type
  P_id;

  if(P_type == 0) { P_id = rnd_i(5,29); P_speed = 0.15; P_pow = 1 }                     // interpolate palettes 
  if(P_type == 1) { P_id = rnd_i(0,9); P_speed = 1; P_pow = 1; P_stretch = 3 }          // pulse palettes
  if(P_type == 2) { P_id = rnd_i(29,46); P_speed = 0; P_pow = 1 }                        // strobe palettes (static)
  if(P_type == 3) { P_id = rnd_i(2,21); P_speed = 0.05; P_pow = 1; P_stretch = 0.2 }    // full fade palettes

  // CREATE PALETTE
  //
  P = GetPalette(P_id);
  if(R()>0.5) P.reverse();

  // ROTATE SPEED SELECTION
  //
  rot_speed = rnd_f(15,64)   // speed all the geo rotates one full turn in seconds
  rot_start = 2*Math.PI*R();
  rot_sign = 1;
  if(R()>0.5) rot_sign = -1;

  // SHADER CHOICE
  //
  shading = 0;
  if(R()<F.use_shader && P_id<24) {   // 24 and above are bw and other palettes that look wierd with shading
    shading = 1;
  }
  // TUNNEL LIGHT CHOICE
  //
  tunnel_light = 0
  if(R()>0.666 && F.depth>0.8 && F.radius_pow>0.99 && P_type==3) tunnel_light = 1;

  // CREATE MATERIALS
  //
  mats = [];
  for(let i=0; i<F.num_layers; i++) {

    let u = 0
    if(tunnel_light==1) {
      u = i/(F.num_layers-1);
      u = Math.pow(clamp(fitrange(u, 0.5, 1, 0, 1),0,1),1/F.radius_pow*4)
    }

    mats[i] = new THREE.MeshLambertMaterial( { color: P[i%P.length], emissive:new THREE.Color(u,u,u), wireframe: false } );
    mats[i].shadowSide = THREE.FrontSide; 
    if(shading){
      mats[i].onBeforeCompile = x => update_shaders(x, shader_choices[F.shader_type]);
    }
  }
}
CreateSet();







//SHADERS
//
const spiral_shader = `
float ang = atan(vUv.y,vUv.x);\n
float sign = layer % 2 == 1 ? -1. : 1.0; 
ang = smoothstep(.0, 0.0,sin(ang * 20.0 * sign + length(vUv) * 10.0 + float(layer)) );\n
vec4 diffuseColor = vec4(vec3(ang), 1.0 );
`;
const angle_shader = `
float ang = atan(vUv.y,vUv.x);\n
float sign = layer % 2 == 1 ? 1.0 : 0.0; 
ang = smoothstep(.0, 0.0,sin(ang * 10.0) );\n
vec3 col = ang > 0.0 ? diffuse :  vec3(sign);
vec4 diffuseColor = vec4(col, 1.0 );
`;
const shader_choices = [spiral_shader, angle_shader];
let shaders = [];
function update_shaders( shader, updated_shader ) {
shader.uniforms.iTime = {value: 0};
shader.uniforms.iResolution = {value: new THREE.Vector3()};
shader.uniforms.layer = {value: 0};
shader.vertexShader = '#define USE_UV 1\n' + shader.vertexShader;
shader.fragmentShader = `varying vec2 vUv;uniform vec3 iResolution;\nuniform float iTime;\nuniform int layer;` + shader.fragmentShader;
shader.fragmentShader = shader.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', updated_shader);
shaders.push(shader);
}






//
// GEOMETRY CREATION
//

//
// BUILD LAYERS
//

let layers;
let geo_grp;
let max_r = 0;

function BuildGeometry() {
  layers = [];
  let pts = 1000;
  if(Set_id == 10) pts = 100;
  if(Set_id == 15) pts = 500;


  geo_grp = new THREE.Group();
  scene.add(geo_grp);
  
  //max_r as minimum of the final layer

  for(let i=0; i<F.num_layers; i++) {
  
    // set up the layer data
    let lu = i/(F.num_layers-1)
    let r = Math.pow(Math.abs(1-lu),F.radius_pow) * (F.max_r-F.min_r) + F.min_r;


    // get this Designs to lerp between and run their layer setups
    let next_design_index = 1;
    for(let i=1; i<F.designs.length; i++) {
      if(lu < F.designs[i].p + 0.01) {
        next_design_index = i;
        break;
      }
    }
    let l = (lu - F.designs[next_design_index-1].p) * (1.0/(F.designs[next_design_index].p - F.designs[next_design_index-1].p));


    //
    // build layer
    //
    let layerShape = new THREE.Shape();
    
    let by = .5;
    let bu = 1e10;
    let tris,normals,vertices,uvs;
    if(headless){
      vertices = [-4,4,0, -4,-4,0, 4,-4,0, 4,4,0];
      normals = [0,0,1,0,0,1,0,0,1,0,0,1];
      tris = [0,1,2,0,2,3];
      uvs = [-4,4,-4,-4,4,-4,4,4];
      if(i!=(F.num_layers-1)) {   // bs to prevent thumbnail scuff
        vertices = [];
        tris = [];
        normals = [];
        uvs = [];
        let max_id = 0;
        for(let i=0; i<pts; i++) {
          let u =  i/pts;
          let p0 = F.designs[next_design_index-1].Get(r, u);
          let p1 = F.designs[next_design_index].Get(r, u);
          let x = lerp(p0.x, p1.x, l);
          let y = lerp(p0.y, p1.y, l); 
          vertices.push(x, y, 0);
          vertices.push(x * 3, y * 3, 0);
          uvs.push(x,y),
          uvs.push(x * 3, y * 3);

          max_id += 2;
          normals.push(0,0,1)
          normals.push(0,0,1)
          if(i == 0){
              continue;
          }
          tris.push(max_id - 4, max_id - 3, max_id- 2);  
          tris.push(max_id - 1, max_id - 2, max_id - 3);
          by = Math.max(by, Math.abs(x * 2));
          by = Math.max(by, Math.abs(y * 2));
          bu = Math.min(bu, Math.abs(x) + Math.abs(y));
        }
        tris.push(max_id - 2, max_id - 1,0);  
        tris.push(1, 0, max_id - 1);  
      }
    
    }else{
      if(i!=(F.num_layers-1)) {   // dont build hole for final layer.
          // build hole
          
          let holePath = new THREE.Path();
          for(let i=0; i<pts; i++) {
          
          let u =  i/pts;

          let p0 = F.designs[next_design_index-1].Get(r, u);
          let p1 = F.designs[next_design_index].Get(r, u);

          let x = lerp(p0.x, p1.x, l);
          let y = lerp(p0.y, p1.y, l);
          let p = new THREE.Vector2(x,y);
          by = Math.max(by, Math.abs(x * 2));
          by = Math.max(by, Math.abs(y * 2));
          bu = Math.min(bu, Math.abs(x) + Math.abs(y));
          //set the path
          if(i==0) holePath.moveTo(p.x, p.y);
          else holePath.lineTo(p.x, p.y);

          }
          layerShape.holes.push(holePath);
      }
    }
    if(i == 0)  max_r = bu;
    let layerGeo;
    if(headless){
      layerGeo = new THREE.BufferGeometry();


      layerGeo.setIndex( tris );
      layerGeo.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
      layerGeo.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
      layerGeo.setAttribute("uv", new THREE.Float32BufferAttribute( uvs, 2 ) )
    
    }else{
      layerShape.moveTo(by, by);
      layerShape.lineTo(by, -by);
      layerShape.lineTo(-by,-by);
      layerShape.lineTo(-by, by);
      // build final layer mesh with hole and add to array
      layerGeo = new THREE.ShapeGeometry(layerShape);
    }

    let layerMesh;
    layerMesh = new THREE.Mesh( layerGeo, mats[i] ) ;    

    layerMesh.castShadow = true;
    layerMesh.receiveShadow = true;

    layers.push(layerMesh);
    geo_grp.add(layerMesh);
  }
  rotateLayers();
}
BuildGeometry();

function ClearGeometry() {
  // layers is an array of THREE.Mesh    - each THREE.Mesh is  created with a THREE.ShapeGeometry which is built with a THREE.Shape
  // geo_grp is a Group which is added to the scene
  for(let i=0; i<layers.length; i++) {
    layers[i].geometry.dispose();
    geo_grp.remove(layers[i]);
  }
  for(let i=0; i<mats.length; i++) {
    mats[i].dispose();
  }

  layers = [];
  mats = [];

  rndr.renderLists.dispose();
  //scene.remove(layers);
  //scene.remove(geo_grp);
  //console.log(layers.length);
}



let cam_rot_scale = 0.0;
function setCamStart() {
  let cam_rot_scale = fitrange(clamp(max_r, .9, 1.05), .9, 1.05, 0, 1);
  let startlimit = lerp(.1, .2, cam_rot_scale);
  //initial camera rot
  cam_grp.rotation.y = Math.PI * fitrange(rnd_i(0,2), 0,1,-1,1) * startlimit;
  cam_grp.rotation.x = Math.PI * fitrange(rnd_i(0,2), 0,1,-1,1) * startlimit;
}
setCamStart();



function buildNewVortex() {
  rnd_tokenData();
  setCamStart();
  ClearGeometry();
  CreateSet();
  BuildGeometry();
}

//
// Animate Loop - all the animation goes in here
//
let then = 0;
let timeChange = 0.0;
let changeTime = 24.0;
requestAnimationFrame(animate);

function animate(now) {

  
  // time data 
  now *= 0.001;  
  let delta = now - then;
  then = now;

  // time test
  timeChange += delta;
  if(timeChange > changeTime) {
    timeChange = 0.0;
    buildNewVortex();
  }


  if(shading){
    const canvas = rndr.domElement;
    for(let i = 0; i < shaders.length; i++){
      shaders[i].uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      shaders[i].uniforms.iTime.value = now;
      shaders[i].uniforms.layer.value = i;
    }
  }
  


  //
  // COLOR CYCLING
  //
  // interpolate colors
  if(P_type == 0) {
    cycle_time += delta;
    if(cycle_time > P_speed) { 
      cycle_time = cycle_time%P_speed;
      pal_index = (pal_index) + 1 % P.length; 
    }
    let u = Math.pow(cycle_time/P_speed, P_pow);   
    // cycle colors;
    for(let i=0; i<mats.length; i++) {
      let a = (i+pal_index)%P.length;
      let b = (a+1)%P.length;
      CC(a, b, u, i)
    }
  }
  //
  // pulse palette type
  if(P_type == 1) {  
    for(let i=0; i<mats.length; i++) {
      let u = (((i/(mats.length-1)) * P_stretch) + (now*P_speed))%1;
      let l = Math.pow((Math.sin(u * 2 * Math.PI)+1)*0.5, P_pow);  
      let a = i%(P.length/2);

      CC(a, a+(P.length/2), l, i)
    }
  }
  //
  // stretch palette type
  if(P_type == 3) { 
      for(let i=0; i<F.num_layers; i++) {
        let u = (i/F.num_layers * P_stretch + (now*P_speed)) % 1;
        let a = Math.floor(fitrange(u, 0, 1, 0, P.length));
        let l = Math.pow((u%(1/P.length)) * P.length, P_pow);

        CC(a,(a+1)%P.length, l, i)

      }

  }

  // orbit cam
  let reset_speed = .75;
  let set_to_originy  = lerp(cam_grp.rotation.y, 0, 1. - Math.exp(-reset_speed * delta)); 
  let set_to_originx  = lerp(cam_grp.rotation.x, 0, 1. - Math.exp(-reset_speed * delta)); 

  //
  // ORBIT CAM (USER INPUT)
  //
  //makes this curve: https://i.imgur.com/zpPnjIw.png

  let dlimit =  lerp(.3, .6, cam_rot_scale); //damping limit max_r
  let limit = dlimit
  
  let dampingx = 1 - (smoothstep(-.0, -dlimit, cam_grp.rotation.y) +  smoothstep(.0,dlimit, cam_grp.rotation.y)); //approx .15 * PI == .47
  accumx =  lerp(lerp(accumx, .0, .5), accumx, dampingx); 
  
  let dampingy = 1 - (smoothstep(-.0, -dlimit, cam_grp.rotation.x) +  smoothstep(.0,dlimit, cam_grp.rotation.x)); //approx .15 * PI == .47
  accumy =  lerp(lerp(accumy, .0, .5), accumy, dampingy); 
  
  let y_bound_min = cam_grp.rotation.y < -limit;
  let y_bound_max = cam_grp.rotation.y >  limit;
  let x_bound_min = cam_grp.rotation.x < -limit;
  let x_bound_max = cam_grp.rotation.x >  limit;
  if(y_bound_max || y_bound_min){
    accumx = 0;
  }
  if(x_bound_max || x_bound_min){
    accumy = 0;
  }
  let rotAmountx = accumx * 0.1;
  let rotAmounty = accumy * 0.1;


  //var max_speed = 
  cam_grp.rotation.y = lerp(set_to_originy, cam_grp.rotation.y - rotAmountx * .008, Math.max(smoothstep(0, .4, Math.abs(accumx)), +click));
  cam_grp.rotation.y = y_bound_min ? -limit : cam_grp.rotation.y;
  cam_grp.rotation.y = y_bound_max ? limit : cam_grp.rotation.y;
  accumx -= rotAmountx;

  cam_grp.rotation.x = lerp(set_to_originx, cam_grp.rotation.x - rotAmounty * .008, Math.max(smoothstep(0, .4, Math.abs(accumy)), +click));
  cam_grp.rotation.x = x_bound_min ? -limit : cam_grp.rotation.x;
  cam_grp.rotation.x = x_bound_max ? limit : cam_grp.rotation.x;
  accumy -= rotAmounty;


  
  //
  // ROTATE ALL THE GEO
  //
  let geo_r = (2*Math.PI*((now/Math.abs(rot_speed))%1)+rot_start) * rot_sign;
  geo_grp.rotation.z = geo_r;

  //
  // ROTATE THE GEO LAYERS 
  //
   
  if(F.rot_add > 0.01) {
    F.twist += F.rot_add;
    rotateLayers();
  }

  requestAnimationFrame(animate);

  // render canvas
  rndr.render( scene, cam );
}



//
//
//
// print all features to the console
console.log(F)
console.log(P_id)
console.log("rot_speed - " + rot_speed)
console.log("rot_start - " + rot_start)
console.log("rot_sign - " + rot_sign)


//screenshot stuff
//if you want to do this
//comment out all the initial camera rotation lines
/*
var strDownloadMime = "image/octet-stream";
var saveFile = function (strData, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
      document.body.appendChild(link); //Firefox requires the link to be in the body
      link.download = filename;
      link.href = strData;
      link.click();
      document.body.removeChild(link); //remove the link when done
  } else {
      location.replace(uri);
  }
}


setTimeout(function() {
  //saveAsImage()
  var strMime = "image/jpeg";
  let imgData = rndr.domElement.toDataURL(strMime);

  saveFile(imgData.replace(strMime, strDownloadMime), tokenData.hash + ".jpg");
}, 10);
*/