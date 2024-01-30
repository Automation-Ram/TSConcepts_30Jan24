enum browser{

    chrome,
    firefox,
    safari,
    edge=getVersion('edge')
}



function getVersion(browserName: string): number{
if(browserName==="edge"){
    return 12;
}
    return -1;
}

console.log(browser.edge)

enum status1{

    ACTIVE="active",
    DEACTIVE=2,
    PENDING
}

console.log(status1)