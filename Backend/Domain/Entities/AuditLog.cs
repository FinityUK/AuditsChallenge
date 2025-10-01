using Domain.Enums;

namespace Domain.Entities;

public class AuditLog
{
    public Guid Id { get; set; }
    public required string EntityName { get; set; }
    public Guid EntityId { get; set; }
    public Operation Operation { get; set; }
    public DateTime Timestamp { get; set; }
    public string? Before { get; set; }
    public string? After { get; set; }
}
