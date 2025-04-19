using api.DTOs;
using api.Models;

namespace api.Interfaces;

public interface IUserRepository
{
    public Task<LoggedInDto?> RegisterAsync(AppUser userInput, CancellationToken cancellationToken);
    public Task<List<AppUser>?> GetAllAsync(CancellationToken cancellationToken);
    public Task<UpdateDto?> UpdatByIdAsync(string userId, AppUser userInput, CancellationToken cancellationToken);
    public Task<DeleteResult?> DeletByIdAsync(string userId, CancellationToken cancellationToken);
    Task<LoggedInDto?> RegisterAsync(AppUser userInput, CancellationToken cancellationToken);
}