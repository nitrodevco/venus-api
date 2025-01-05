export const Base32Encoder = (buffer: Buffer) =>
{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let output = '';

    for (const byte of buffer)  bits += byte.toString(2).padStart(8, '0');
  
    for (let i = 0; i < bits.length; i += 5) 
    {
        const chunk = bits.slice(i, i + 5).padEnd(5, '0');
        const index = parseInt(chunk, 2);

        output += alphabet[index];
    }

    while (output.length % 8 !== 0) output += '=';
  
    return output;
}
