using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Config;

public class AuditLogConfig : IEntityTypeConfiguration<AuditLog>
{
    public void Configure(EntityTypeBuilder<AuditLog> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.EntityName).IsRequired();
        builder.Property(x => x.EntityId).IsRequired();
        builder.Property(x => x.Operation).IsRequired();
        builder.Property(x => x.Timestamp).IsRequired();
    }
}
