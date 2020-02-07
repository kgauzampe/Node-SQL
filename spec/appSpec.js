const addContent = require('../src/app');

describe("node sql", ()=>{
    
     it("save data to visitor table", async (done)=>{
        let AddContent = await addContent(01, "Mpumelelo",38,"02/02/2020","10:30", "kgaugelo", "No comment")
        expect(AddContent[0].int_col).toEqual(01)
        expect(AddContent[0].str_col).toEqual("Mpumelelo")
        expect(AddContent[0].int_col).toEqual(38)
        expect(AddContent[0].date_col).toEqual("02/02/2020")
        expect(AddContent[0].time_col).toEqual("10:30")
        expect(AddContent[0].str_col).toEqual("kgauza") 
        expect(AddContent[0].str_col).toEqual("No comment") 
        done()
    })

})
/*describe("node sql", ()=>{
    const deleteContent = require('../src/app')
    it("delet data to visitor table", async (done)=>{
       let DeleteContent = await deleteContent( )
       expect(DeleteContent[0].int_col).toBeNull
       expect(DeleteContent[0].str_col).toBeNull
       expect(DeleteContent[0].int_col).toBeNull
       expect(DeleteContent[0].date_col).toBeNull
       expect(DeleteContent[0].time_col).toBeNull
       expect(DeleteContent[0].str_col).toBeNull
       expect(DeleteContent[0].str_col).toBeNull
       done()
   })

})*/