namespace Domain.Entities;

public class UserPreference
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;

    public User? User { get; set; }
}
