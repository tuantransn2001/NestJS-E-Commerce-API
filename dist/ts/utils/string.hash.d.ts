declare class HashStringHandler {
    static hash(str: string, saltRounds: number): string;
    static verify(plainStr: string, hashedStr: string): boolean;
}
export default HashStringHandler;
