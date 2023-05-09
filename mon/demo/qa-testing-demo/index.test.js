 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  describe('formatTitle Test',()=>{

    test('formatTitle returns a string', ()=>{
      let formattedTitle = formatTitle(testData.title)
      expect(typeof(formattedTitle)).toBe('string')
    })

    test("Should create a title: Capitalize the first letter of each word",()=>{
      expect(formatTitle(testData.title)).toBe('Nulla Ac')
    })

  })

  describe("Shorten bio test", ()=>{
    
    test("Checks for bio length",()=>{
      let shortBio = shortenBio(testData.bio)
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    })
    test("Creates a shorten bio that slices at \n element",()=>{
      expect(shortenBio(testData.bio)).toBe("About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi...")
    })
    test("Shorten bio adds ... to the end",()=>{
      let shortBio = shortenBio(testData.bio)
      expect(shortBio).toContain('...')
    })
  })


  describe("Convert length tests",()=>{
      test("Turns minutes into hours and minutes as an array=[hour,minute]",()=>{
      expect(convertLength(testData.length)).toEqual([1,5])
    })
    
      test("convert returns an array of two items",()=>{
        let time = convertLength(testData.length)
        expect(time.length).toBe(2)
      })

      test('convertlength can handle numbers below 60', ()=>{
        let convert = convertLength(40)
        expect(convert[1]).toEqual(40)
        expect(convert[0]).toEqual(0)
      })
  })