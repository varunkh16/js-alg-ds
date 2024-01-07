var modularExponentiation = (base, exponent, n) => {
    if (exponent === 0) {
        return 1;
    }
    if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
    }
    if (exponent == 1) return base;
    let hp = modularExponentiation(base, Math.floor(exponent / 2), n);
    let res = ((hp % n) * (hp % n)) % n;
    if (exponent % 2 != 0) {
        res = ((base % n) * res) % n;
    }
    return res;
};

console.log(modularExponentiation(2, 5, 13));