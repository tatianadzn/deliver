export const TO_REGISTERED = 'TO_REGISTERED';
export const TO_UNREGISTERED = 'TO_UNREGISTERED';
export const TO_AUTHORISED = 'TO_AUTHORISED';
export const TO_UNAUTHORISED = 'TO_UNAUTHORISED';

export const to_registered = () => ({
    type: TO_REGISTERED
});


export const to_unregistered = () => ({
    type: TO_UNREGISTERED
});


export const to_authorised = () => ({
    type: TO_AUTHORISED
});


export const to_unauthorised = () => ({
    type: TO_UNAUTHORISED
});