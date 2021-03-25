function hexToRgba(hexColorCode, opacity = 1) {
    const isHexColorCodeValid = /^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColorCode);
    if (!isHexColorCodeValid) {
        throw new Error('Invalid Hex color code! Can not convert to RGBA.');
    }

    let c = hexColorCode.substring(1).split('');
    if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = `0x${c.join('')}`;
    // eslint-disable-next-line no-bitwise
    const rgbaString = [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ');
    return `rgba(${rgbaString}, ${opacity})`;
}

const rgba = hexToRgba('#4F7CA9', 0.05)
console.log(rgba)
