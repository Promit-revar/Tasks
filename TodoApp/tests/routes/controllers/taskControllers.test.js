const controller = require('../../../routes/controllers/taskController');
const service = require('../../../services/taskServices');


describe('Check controller', () => {
  it('should return a new user', async () => {
    jest.spyOn(service, 'getTasks').mockResolvedValue(
      [{
        id: 1, 
        name: 'test', 
        isCompleted: false,
      }]);
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await controller.getTasks({
      body: {
        name: 'test',
      }}, mockRes);
    expect(mockRes.send).toBeCalledWith({data: [{
      id: 1,
      name: 'test',
      isCompleted: false,
    }]});
  });
  it('should create a new user', async () => {
    jest.spyOn(service, 'addTask').mockResolvedValue(
      {
        id: 1, 
        title: 'test',
        desc:'testing post', 
        isCompleted: false
      });
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await controller.createTask({
      body: {
        title: 'test',
        desc:'testing post'
      
      }}, mockRes);
    expect(mockRes.send).toBeCalledWith({
      id: 1,
      title: 'test',
      desc:'testing post',
      isCompleted: false
    });
    expect(mockRes.status).toBeCalledWith(201);
  });
  it('should edit the entire object', async () => {
    jest.spyOn(service, 'putTask').mockResolvedValue(
      {
        id: 1, 
        title: 'test',
        desc:'testing post', 
        isCompleted: true
      });
        
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await controller.editTasks({
      body: {
        title: 'test',
        isCompleted:true
        
      },
      params: {
        id:1
      }}, mockRes);
          
    expect(mockRes.send).toBeCalledWith({
      data:{
        id: 1,
        title: 'test',
        desc:'testing post',
        isCompleted: true
      }
    });
    expect(mockRes.status).toBeCalledWith(200);
  });
  it('should delete the tasks marked as Completed', async () => {
    jest.spyOn(service, 'deleteTask').mockResolvedValue(
      {
        data:[1]
      });
          
    const mockRes = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await controller.deleteCompletedTasks({}, mockRes);
            
    expect(mockRes.send).toBeCalledWith({
      data:{data:[1]}
    });
    expect(mockRes.status).toBeCalledWith(200);
        
  });
});

  