/*const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);    
    const output = await getCommandOutput(`${lastCommand}
declare -p VAR`)

    assert(/^VAR=('|")hello world$1/.test(lastCommand) && output === 'declare -- VAR="hello world"
');
  });
});*/
