

describe("node sql", ()=>{ 
    const {addContent} = require('../src/app');
     let obj = {dateofvisit: new Date ("02/02/2020")}

     it("save data to visitor table", async function(done){
        AddContent = await addContent("Kgaugelo",27,"02/02/2020","10:38:00", "Portia", "No comment");
        expect(AddContent[0].visitorname).toEqual("Kgaugelo")
        expect(AddContent[0].visitorage).toEqual(27)
        expect(AddContent[0].dateofvisit).toEqual(obj.dateofvisit)
        expect(AddContent[0].timeofvisit).toEqual("10:38:00")
        expect(AddContent[0].nameofassistant).toEqual("Portia") 
        expect(AddContent[0].comments).toEqual("No comment") 
        done();
        
        
    })

})

describe("node sql", ()=>{ 
    const {updateContent} = require('../src/app');

     it("Updates data on visitor table", async function(done){
        UpdateContent = await updateContent("Kgaugelo",27,"02/02/2020","10:38:00", "Portia", "No comment");
        expect(UpdateContent[0].nameofassistant).toEqual("Mpumelelo") 
        expect(UpdateContent[0].comments).toEqual("It is a nice building") 
        done();
        
        
    })

})

describe("node sql", ()=>{ 
    const {displayOneContent} = require('../src/app');
     let obj = {dateofvisit: new Date ("02/02/2020")}

     it("displays selected data from the visitor table", async function(done){
        DisplayOneContent = await displayOneContent("Kgaugelo",27,"02/02/2020","10:38:00", "Mpumelelo", "It is a nice building");
        expect(DisplayOneContent[0].visitorname).toEqual("Kgaugelo")
        expect(DisplayOneContent[0].visitorage).toEqual(27)
        expect(DisplayOneContent[0].dateofvisit).toEqual(obj.dateofvisit)
        expect(DisplayOneContent[0].timeofvisit).toEqual("10:38:00")
        expect(DisplayOneContent[0].nameofassistant).toEqual("Mpumelelo") 
        expect(DisplayOneContent[0].comments).toEqual("It is a nice building") 
        done();
        
        
    })

})

