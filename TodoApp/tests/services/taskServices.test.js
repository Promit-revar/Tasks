const db=require('../../database/models');
const service = require('../../services/taskServices');


describe('Check Services', () => {
  it('should return a new task', async () => {
    jest.spyOn(db.Tasks, 'create').mockResolvedValue(
      {
        id: 1, 
        name: 'test', 
        isCompleted: false,
      });
    
    const result=await service.addTask({
      
      name: 'test',
      desc:'test description'
    });
    expect(result).toEqual({
      id: 1,
      name: 'test',
      isCompleted: false,
    });
  });
  it('should return a list task', async () => {
    jest.spyOn(db.Tasks, 'findAll').mockResolvedValue([{
      id: 1,
      name: 'test',
      isCompleted: false,
    }]);
    
    const result=await service.getTasks();
    expect(result).toEqual([{
      id: 1,
      name: 'test',
      isCompleted: false,
    }]);
  });
  it('should return a number of updated tupples', async () => {
    jest.spyOn(db.Tasks, 'update').mockResolvedValue([{
      data: 1,
      
    }]);
    
    const result=await service.putTask(1,{
    
      name: 'test',
      isCompleted: true,
    });
    expect(result).toEqual([{
      data: 1,
      
    }]);
  });
  it('should return a number of updated tupples', async () => {
    jest.spyOn(db.Tasks, 'destroy').mockResolvedValue([{
      data: 1,
      
    }]);
    
    const result=await service.deleteTask();
    expect(result).toEqual([{
      data: 1,
      
    }]);
  });
  
});

  