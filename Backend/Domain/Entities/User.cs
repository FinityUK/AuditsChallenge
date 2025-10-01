namespace Domain.Entities;

public class User
{
    public Guid Id { get; set; }
    public required string Email { get; set; }

    public ICollection<UserPreference> Preferences { get; set; } = new List<UserPreference>();
}
