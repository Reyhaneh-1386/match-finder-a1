using api.DTOs;
using api.Models;
using MongoDB.Driver;
using DTO = api.DTOs;

namespace api.Interfaces;

public interface IAccountRepository
{
    public Task<LoggedInDto?> RegisterAsync(AppUser userInput, CancellationToken cancellationToken);
    public Task<LoggedInDto?> LoginAsync(DTO.LoginDto userInput, CancellationToken cancellationToken);
    public Task<List<AppUser>?> GetAllAsync(CancellationToken cancellationToken);
    public Task<LoggedInDto?> UpdateByIdAsync(string userId, AppUser userInput, CancellationToken cancellationToken);
    public Task<DeleteResult?> DeleteByIdAsync(string userId, CancellationToken cancellationToken);
} 