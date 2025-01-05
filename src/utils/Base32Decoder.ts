export const Base32Decoder = (input: string) => 
{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const paddingRemoved = input.replace(/=+$/, '');

    let bits = '';
    const output = [];
  
    for (const char of paddingRemoved) 
    {
        const index = alphabet.indexOf(char.toUpperCase());

        if (index === -1) throw new Error(`Invalid Base32 character: ${char}`);

        bits += index.toString(2).padStart(5, '0');
    }
  
    for (let i = 0; i < bits.length; i += 8) 
    {
        const byte = bits.slice(i, i + 8);

        if (byte.length === 8) output.push(parseInt(byte, 2));
    }
  
    return Buffer.from(output);
}
