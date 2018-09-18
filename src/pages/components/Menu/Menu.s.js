import glamorous from 'glamorous';

export const MainContainer = glamorous.div(props => ({
    zIndex: '9999   ',
    width: '100%',
    height: '6.5%',
    background: 'rgba(39,39,39,1)',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const YTLogoWrapper = glamorous.div(props => ({
    position: 'absolute',
    left: '5%',
    height: '60%',
    width: '8%',
    cursor: 'pointer'  
}))
export const YTLogoImage = glamorous.img(props => ({
    height: '100%',
    width: '100%'
}))

export const AddInputContaincer = glamorous.div(props => ({
    width: '35%',
    height: '30px',
    background: 'rgb(32,32,32)' ,
    border: '1px solid #343434',    
}))

export const AddInput = glamorous.input(props => ({
    float: 'left',
    width: '86.5%',
    height: '100%',
    paddingLeft: '10px',
    fontSize: '16px',
    background: 'transparent',
    color: 'silver',
    border: 'none',
}))

export const AddButton = glamorous.div(props => ({
    height: '100%',
    width: '12%',
    float: 'right',
    background: '#343434',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777777',

    ':hover': {
        color: '#a9a9a9',
        cursor: 'pointer'
    }
    
}))

export const DeleteAll = glamorous.div(props => ({
    position: 'relative',
    left: '30%',
    height: '50%',
    width: '30px',
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#efefef', 
    fontSize: '20px',
    

    ':hover': {
        cursor: 'pointer'
    }
}))