interface ItranscriptionTable {
    [key: string]: string
}

class Transcriptor {
    transcriptionTable: ItranscriptionTable = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    }
    toRna(strand: string) {
        // Regex matches if DNA strand includes letters besides GCTA
        if (strand.match(/[^GCTA]+/g)) {
            throw new Error('Invalid input DNA.')
        }
        let transcription = ''
        for (const letter of strand) {
            transcription += this.transcriptionTable[letter]
        }
        return transcription
    }
}

export default Transcriptor